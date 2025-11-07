import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, Timer, Trophy, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import BottomNav from './BottomNav';

interface WordBubble {
  id: number;
  word: string;
  translation: string;
  x: number;
  y: number;
  speed: number;
}

interface WordCollectionGameProps {
  onBackClick?: () => void;
  onMenuClick?: () => void;
  onGameHubClick?: () => void;
  onHomeClick?: () => void;
  onLeaderboardClick?: () => void;
  onReviewClick?: () => void;
  onProfileClick?: () => void;
  activeTab?: 'home' | 'leaderboard' | 'review' | 'profile' | 'gameHub';
  language?: string;
}

const wordPairsByLanguage: Record<string, Array<{ word: string; translation: string }>> = {
  French: [
    { word: 'Hello', translation: 'Bonjour' },
    { word: 'Goodbye', translation: 'Au revoir' },
    { word: 'Thank you', translation: 'Merci' },
    { word: 'Please', translation: "S'il vous plaît" },
    { word: 'Yes', translation: 'Oui' },
    { word: 'No', translation: 'Non' },
    { word: 'Water', translation: 'Eau' },
    { word: 'Food', translation: 'Nourriture' },
    { word: 'Friend', translation: 'Ami' },
    { word: 'House', translation: 'Maison' },
    { word: 'Cat', translation: 'Chat' },
    { word: 'Dog', translation: 'Chien' },
    { word: 'Book', translation: 'Livre' },
    { word: 'Love', translation: 'Amour' },
  ],
  Spanish: [
    { word: 'Hello', translation: 'Hola' },
    { word: 'Goodbye', translation: 'Adiós' },
    { word: 'Thank you', translation: 'Gracias' },
    { word: 'Please', translation: 'Por favor' },
    { word: 'Yes', translation: 'Sí' },
    { word: 'No', translation: 'No' },
    { word: 'Water', translation: 'Agua' },
    { word: 'Food', translation: 'Comida' },
    { word: 'Friend', translation: 'Amigo' },
    { word: 'House', translation: 'Casa' },
    { word: 'Cat', translation: 'Gato' },
    { word: 'Dog', translation: 'Perro' },
    { word: 'Book', translation: 'Libro' },
    { word: 'Love', translation: 'Amor' },
  ],
  German: [
    { word: 'Hello', translation: 'Hallo' },
    { word: 'Goodbye', translation: 'Auf Wiedersehen' },
    { word: 'Thank you', translation: 'Danke' },
    { word: 'Please', translation: 'Bitte' },
    { word: 'Yes', translation: 'Ja' },
    { word: 'No', translation: 'Nein' },
    { word: 'Water', translation: 'Wasser' },
    { word: 'Food', translation: 'Essen' },
    { word: 'Friend', translation: 'Freund' },
    { word: 'House', translation: 'Haus' },
    { word: 'Cat', translation: 'Katze' },
    { word: 'Dog', translation: 'Hund' },
    { word: 'Book', translation: 'Buch' },
    { word: 'Love', translation: 'Liebe' },
  ],
};

export default function WordCollectionGame({ onBackClick, onMenuClick, onGameHubClick, onHomeClick, onLeaderboardClick, onReviewClick, onProfileClick, activeTab, language = 'French' }: WordCollectionGameProps) {
  const wordPairs = wordPairsByLanguage[language] || wordPairsByLanguage.French;
  const [bubbles, setBubbles] = useState<WordBubble[]>([]);
  const [selectedBubble, setSelectedBubble] = useState<WordBubble | null>(null);
  const [userInput, setUserInput] = useState('');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes = 600 seconds
  const [feedback, setFeedback] = useState<{ type: 'correct' | 'wrong', message: string } | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const nextIdRef = useRef(0);

  // Start game
  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setTimeLeft(600);
    setGameOver(false);
    setBubbles([]);
  };

  // Timer countdown
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setGameOver(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [gameStarted, gameOver]);

  // Spawn bubbles
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const spawnInterval = setInterval(() => {
      const randomWord = wordPairs[Math.floor(Math.random() * wordPairs.length)];
      const newBubble: WordBubble = {
        id: nextIdRef.current++,
        word: randomWord.word,
        translation: randomWord.translation,
        x: Math.random() * 300 + 20, // Random x position within bounds
        y: Math.random() * 500 + 150, // Random y position
        speed: Math.random() * 20 + 10, // Random speed
      };
      setBubbles((prev) => [...prev, newBubble]);
    }, 3000); // Spawn every 3 seconds

    return () => clearInterval(spawnInterval);
  }, [gameStarted, gameOver]);

  // Animate bubbles (floating effect)
  useEffect(() => {
    if (!gameStarted || gameOver) return;

    const animationInterval = setInterval(() => {
      setBubbles((prev) =>
        prev.map((bubble) => ({
          ...bubble,
          y: (bubble.y + 1) % 700, // Loop around screen
        }))
      );
    }, 50);

    return () => clearInterval(animationInterval);
  }, [gameStarted, gameOver]);

  // Focus input when bubble is selected
  useEffect(() => {
    if (selectedBubble && inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedBubble]);

  const handleBubbleClick = (bubble: WordBubble) => {
    setSelectedBubble(bubble);
    setUserInput('');
    setFeedback(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBubble) return;

    const isCorrect = userInput.toLowerCase().trim() === selectedBubble.translation.toLowerCase();

    if (isCorrect) {
      const timeBonus = Math.floor((10 - userInput.length / 2) * 10); // Faster typing = more points
      const points = 100 + Math.max(0, timeBonus);
      setScore((prev) => prev + points);
      setFeedback({ type: 'correct', message: `+${points} points!` });
      
      // Remove bubble
      setBubbles((prev) => prev.filter((b) => b.id !== selectedBubble.id));
      
      // Clear after short delay
      setTimeout(() => {
        setSelectedBubble(null);
        setUserInput('');
        setFeedback(null);
      }, 800);
    } else {
      setTimeLeft((prev) => Math.max(0, prev - 5)); // 5 second penalty
      setFeedback({ type: 'wrong', message: 'Wrong! -5 seconds' });
      
      setTimeout(() => {
        setFeedback(null);
      }, 1500);
    }
  };

  const handleCloseDialog = () => {
    setSelectedBubble(null);
    setUserInput('');
    setFeedback(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white overflow-clip relative rounded-[55px] size-full">
      {/* Header */}
      <div className="absolute bg-white box-border content-stretch flex items-center justify-between left-0 right-0 px-[16px] py-[11px] top-[57px] z-10">
        <button
          onClick={onBackClick}
          className="flex items-center justify-center w-[40px] h-[40px] hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-[#4b4b4b]" />
        </button>
        <div className="flex-1 text-center">
          <h1 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[22px] tracking-[-0.44px]">
            Word Collection - {language}
          </h1>
        </div>
        <div className="w-[40px]" />
      </div>

      {/* Stats Bar */}
      {gameStarted && !gameOver && (
        <div className="absolute top-[120px] left-[16px] right-[16px] flex items-center justify-between z-10">
          <div className="flex items-center gap-[8px] bg-[#58cc02] rounded-[12px] px-[12px] py-[8px]">
            <Trophy className="w-[20px] h-[20px] text-white" />
            <span className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-white text-[18px]">
              {score}
            </span>
          </div>
          <div className="flex items-center gap-[8px] bg-[#ff4b4b] rounded-[12px] px-[12px] py-[8px]">
            <Timer className="w-[20px] h-[20px] text-white" />
            <span className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-white text-[18px]">
              {formatTime(timeLeft)}
            </span>
          </div>
        </div>
      )}

      {/* Game Area */}
      <div className="absolute top-[180px] bottom-0 left-0 right-0 overflow-hidden z-0">
        {!gameStarted ? (
          // Start Screen
          <div className="flex flex-col items-center justify-center h-full px-[40px]">
            <div className="bg-[#1cb0f6] rounded-[24px] p-[16px] mb-[24px]">
              <Trophy className="w-[64px] h-[64px] text-white" />
            </div>
            <h2 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[28px] tracking-[-0.56px] mb-[16px] text-center">
              Daily Challenge
            </h2>
            <p className="text-[#afafaf] text-[17px] text-center mb-[32px] leading-relaxed">
              Collect as many words as possible in 10 minutes! Tap bubbles, type translations, and earn points. Faster typing = more points!
            </p>
            <button
              onClick={startGame}
              className="bg-[#58cc02] hover:bg-[#4fb001] active:scale-95 transition-all rounded-[16px] px-[48px] py-[16px] shadow-[0_4px_0_0_#4fb001]"
            >
              <span className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-white text-[19px]">
                Start Challenge
              </span>
            </button>
          </div>
        ) : gameOver ? (
          // Game Over Screen
          <div className="flex flex-col items-center justify-center h-full px-[40px]">
            <div className="bg-[#ffc800] rounded-[24px] p-[16px] mb-[24px]">
              <Trophy className="w-[64px] h-[64px] text-white" />
            </div>
            <h2 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[28px] tracking-[-0.56px] mb-[16px]">
              Challenge Complete!
            </h2>
            <div className="bg-[#f7f7f7] rounded-[16px] p-[24px] mb-[32px] w-full">
              <p className="text-[#afafaf] text-[15px] text-center mb-[8px]">
                Final Score
              </p>
              <p className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#58cc02] text-[48px] text-center">
                {score}
              </p>
            </div>
            <button
              onClick={startGame}
              className="bg-[#58cc02] hover:bg-[#4fb001] active:scale-95 transition-all rounded-[16px] px-[48px] py-[16px] shadow-[0_4px_0_0_#4fb001] mb-[16px]"
            >
              <span className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-white text-[19px]">
                Play Again
              </span>
            </button>
            <button
              onClick={onBackClick}
              className="text-[#1cb0f6] font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[17px]"
            >
              Back to Review
            </button>
          </div>
        ) : (
          // Active Game
          <div className="relative w-full h-full">
            {/* Floating Bubbles */}
            <AnimatePresence>
              {bubbles.map((bubble) => (
                <motion.button
                  key={bubble.id}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  onClick={() => handleBubbleClick(bubble)}
                  className="absolute bg-gradient-to-br from-[#1cb0f6] to-[#1989c4] hover:scale-110 active:scale-95 transition-transform rounded-full shadow-lg"
                  style={{
                    left: `${bubble.x}px`,
                    top: `${bubble.y}px`,
                    width: '80px',
                    height: '80px',
                  }}
                >
                  <span className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-white text-[15px] px-[8px]">
                    {bubble.word}
                  </span>
                </motion.button>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      {/* Translation Input Dialog */}
      <AnimatePresence>
        {selectedBubble && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 z-40"
              onClick={handleCloseDialog}
            />
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[24px] p-[24px] w-[350px] z-50 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-[20px]">
                <h3 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[22px]">
                  Translate:
                </h3>
                <button
                  onClick={handleCloseDialog}
                  className="hover:bg-gray-100 rounded-lg p-[4px] transition-colors"
                >
                  <X className="w-[24px] h-[24px] text-[#afafaf]" />
                </button>
              </div>
              
              <div className="bg-[#1cb0f6] rounded-[16px] p-[20px] mb-[20px]">
                <p className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-white text-[28px] text-center">
                  {selectedBubble.word}
                </p>
              </div>

              <form onSubmit={handleSubmit}>
                <input
                  ref={inputRef}
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  placeholder="Type translation..."
                  className="w-full border-2 border-[#e5e5e5] rounded-[12px] px-[16px] py-[14px] font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[18px] mb-[16px] focus:border-[#1cb0f6] focus:outline-none"
                />
                
                {feedback && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`rounded-[12px] px-[16px] py-[12px] mb-[16px] text-center ${
                      feedback.type === 'correct'
                        ? 'bg-[#58cc02] text-white'
                        : 'bg-[#ff4b4b] text-white'
                    }`}
                  >
                    <p className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[17px]">
                      {feedback.message}
                    </p>
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="w-full bg-[#58cc02] hover:bg-[#4fb001] active:scale-95 transition-all rounded-[16px] py-[16px] shadow-[0_4px_0_0_#4fb001]"
                >
                  <span className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-white text-[19px]">
                    Check Answer
                  </span>
                </button>
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Fixed Bottom Navigation */}
      <BottomNav 
        onHomeClick={onHomeClick}
        onLeaderboardClick={onLeaderboardClick}
        onReviewClick={onReviewClick}
        onProfileClick={onProfileClick}
        onGameHubClick={onGameHubClick}
        onMenuClick={onMenuClick}
        activeTab={activeTab}
      />
    </div>
  );
}
