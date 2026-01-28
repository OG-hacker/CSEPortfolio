import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { GameSetup, type GameConfig } from "@/components/GameSetup";
import { GamePlay } from "@/components/GamePlay";
import { JoinRoom } from "@/components/JoinRoom";
import { CreateRoom } from "@/components/CreateRoom";
import { RoomLobby } from "@/components/RoomLobby";
import { MultiplayerGame } from "@/components/MultiplayerGame";
import { useRoom } from "@/hooks/useRoom";
import { categories, getRandomWord, getHintWord } from "@/data/gameCategories";

type Screen = "setup" | "local" | "create" | "join" | "lobby" | "multiplayer";

const Index = () => {
  const [screen, setScreen] = useState<Screen>("setup");
  const [gameConfig, setGameConfig] = useState<GameConfig | null>(null);
  const [pendingConfig, setPendingConfig] = useState<GameConfig | null>(null);
  const [setupConfig, setSetupConfig] = useState<GameConfig>({
    playerCount: 4,
    categoryIds: ["clash-royale"],
    showHint: false,
    everyoneImposter: false
  });
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "dark";
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const {
    room,
    players,
    votes,
    playerId,
    isHost,
    loading,
    error,
    currentPlayer,
    createRoom,
    joinRoom,
    startGame,
    markRoleSeen,
    startVoting,
    castVote,
    endGame,
    playAgain,
    leaveRoom,
  } = useRoom();

  // Select random word and hint from category
  const getWordPair = (categoryIds: string[], showHint: boolean = true) => {
    const word = getRandomWord(categoryIds);
    const hint = showHint ? getHintWord(word, categoryIds) : null;
    return { word, hint };
  };

  // Local play handlers
  const handleLocalStart = (config: GameConfig) => {
    setGameConfig(config);
    setScreen("local");
  };

  const handleLocalReset = () => {
    setGameConfig(null);
    setScreen("setup");
  };

  // Create room handlers
  const handleCreateRoom = (config: GameConfig) => {
    setPendingConfig(config);
    setScreen("create");
  };

  const handleCreateSubmit = async (hostName: string) => {
    if (!pendingConfig) return null;

    const { word, hint } = getWordPair(pendingConfig.categoryIds, pendingConfig.showHint);
    const code = await createRoom(pendingConfig, word, hint, hostName);
    if (code) {
      setScreen("lobby");
    }
    return code;
  };

  // Join room handlers
  const handleJoinRoom = () => {
    setScreen("join");
  };

  const handleJoinSubmit = async (code: string, name: string) => {
    const success = await joinRoom(code, name);
    if (success) {
      setScreen("lobby");
    }
    return success;
  };

  // Room handlers
  const handleStartMultiplayer = async () => {
    await startGame();
    setScreen("multiplayer");
  };

  const handlePlayAgain = async () => {
    if (!room) return;
    const { word, hint } = getWordPair(room.category_id.split(","), room.show_hint);
    await playAgain(word, hint);
  };

  const handleLeaveRoom = async () => {
    await leaveRoom();
    setScreen("setup");
    setPendingConfig(null);
  };

  const handleBack = () => {
    setScreen("setup");
    setPendingConfig(null);
  };

  // Track room status changes for screen transitions
  if (room?.status === "playing" && screen === "lobby") {
    setScreen("multiplayer");
  }

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-[360px] h-[360px] sm:w-[520px] sm:h-[520px] lg:w-[600px] lg:h-[600px] rounded-full opacity-30 blur-[90px] sm:blur-[120px]"
          style={{ background: "radial-gradient(circle, hsl(180 100% 50% / 0.15), transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] lg:w-[500px] lg:h-[500px] rounded-full opacity-20 blur-[80px] sm:blur-[100px]"
          style={{ background: "radial-gradient(circle, hsl(320 100% 60% / 0.15), transparent 70%)" }}
        />
      </div>

      {/* Main content */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative z-10"
      >
        <div className="fixed top-4 right-4 z-50">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl border border-border gradient-card text-foreground shadow-lg text-xs sm:text-sm"
          >
            {theme === "dark" ? (
              <>
                <Sun className="w-4 h-4 text-warning" />
                <span className="font-semibold">Light</span>
              </>
            ) : (
              <>
                <Moon className="w-4 h-4 text-primary" />
                <span className="font-semibold">Dark</span>
              </>
            )}
          </motion.button>
        </div>
        {screen === "setup" && (
          <GameSetup
            onStart={handleLocalStart}
            onCreateRoom={handleCreateRoom}
            onJoinRoom={handleJoinRoom}
            initialConfig={setupConfig}
            onConfigChange={setSetupConfig}
          />
        )}

        {screen === "local" && gameConfig && (
          <GamePlay config={gameConfig} onReset={handleLocalReset} />
        )}

        {screen === "create" && pendingConfig && (
          <CreateRoom
            config={pendingConfig}
            onBack={handleBack}
            onCreate={handleCreateSubmit}
            loading={loading}
            error={error}
          />
        )}

        {screen === "join" && (
          <JoinRoom
            onJoin={handleJoinSubmit}
            onBack={handleBack}
            error={error}
            loading={loading}
          />
        )}

        {screen === "lobby" && room && (
          <RoomLobby
            room={room}
            players={players}
            isHost={isHost}
            onStart={handleStartMultiplayer}
            onLeave={handleLeaveRoom}
          />
        )}

        {screen === "multiplayer" && room && (
          <MultiplayerGame
            room={room}
            players={players}
            currentPlayer={currentPlayer}
            isHost={isHost}
            votes={votes}
            onMarkSeen={markRoleSeen}
            onStartVoting={startVoting}
            onVote={castVote}
            onEndGame={endGame}
            onPlayAgain={handlePlayAgain}
            onLeave={handleLeaveRoom}
          />
        )}
      </motion.main>
    </div>
  );
};

export default Index;
