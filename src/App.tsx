import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import LessonTrack from './imports/LessonTrack';
import LessonAsking from './imports/LessonAsking';
import Frame138 from './imports/Frame137';
import TodaysReview from './components/TodaysReview';
import WordCollectionGame from './components/WordCollectionGame';
import GameHub from './components/GameHub';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<'track' | 'lesson' | 'review' | 'game' | 'gameHub'>('track');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'home' | 'leaderboard' | 'review' | 'profile' | 'gameHub'>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<string>('French');

  const handleLessonClick = () => {
    setCurrentScreen('lesson');
  };

  const handleBackToTrack = () => {
    setCurrentScreen('track');
    setActiveTab('home');
  };

  const handleReviewClick = () => {
    setCurrentScreen('review');
    setActiveTab('review');
  };

  const handleGameClick = () => {
    setCurrentScreen('game');
  };

  const handleBackToReview = () => {
    setCurrentScreen('review');
  };

  const handleGameHubClick = () => {
    setCurrentScreen('gameHub');
    setActiveTab('gameHub');
  };

  const handleLeaderboardClick = () => {
    setCurrentScreen('gameHub');
    setActiveTab('leaderboard');
  };

  const handleProfileClick = () => {
    setCurrentScreen('gameHub');
    setActiveTab('profile');
  };

  const handleModalToggle = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleWordCollectionClick = (language: string) => {
    setSelectedLanguage(language);
    setCurrentScreen('game');
    setActiveTab('gameHub');
  };

  return (
    <div className="relative w-full h-screen bg-gray-50 flex items-center justify-center overflow-hidden">
      {/* Main App Container */}
      <div className="relative w-full max-w-[430px] h-full max-h-[932px] shadow-2xl overflow-hidden">
        {currentScreen === 'track' ? (
          <LessonTrack 
            onLessonClick={handleLessonClick} 
            onMenuClick={handleModalToggle} 
            onReviewClick={handleReviewClick}
            onHomeClick={handleBackToTrack}
            onLeaderboardClick={handleLeaderboardClick}
            onProfileClick={handleProfileClick}
            onGameHubClick={handleGameHubClick}
            activeTab={activeTab}
          />
        ) : currentScreen === 'lesson' ? (
          <LessonAsking onBackClick={handleBackToTrack} />
        ) : currentScreen === 'review' ? (
          <TodaysReview 
            onBackClick={handleGameHubClick} 
            onGameClick={handleGameClick} 
            onMenuClick={handleModalToggle} 
            onGameHubClick={handleGameHubClick}
            onHomeClick={handleBackToTrack}
            onLeaderboardClick={handleLeaderboardClick}
            onProfileClick={handleProfileClick}
            activeTab={activeTab}
          />
        ) : currentScreen === 'game' ? (
          <WordCollectionGame 
            onBackClick={handleGameHubClick} 
            onMenuClick={handleModalToggle} 
            onGameHubClick={handleGameHubClick}
            onHomeClick={handleBackToTrack}
            onLeaderboardClick={handleLeaderboardClick}
            onReviewClick={handleReviewClick}
            onProfileClick={handleProfileClick}
            activeTab={activeTab}
            language={selectedLanguage}
          />
        ) : (
          <GameHub 
            onBackClick={handleBackToTrack} 
            onMenuClick={handleModalToggle}
            onHomeClick={handleBackToTrack}
            onLeaderboardClick={handleLeaderboardClick}
            onReviewClick={handleReviewClick}
            onProfileClick={handleProfileClick}
            onGameHubClick={handleGameHubClick}
            onWordCollectionClick={handleWordCollectionClick}
            activeTab={activeTab}
          />
        )}
        
        {/* Modal Overlay */}
        <AnimatePresence>
          {isModalOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-black/50 z-40"
                onClick={handleModalToggle}
              />
              <motion.div
                initial={{ y: 'calc(100% + 94px)' }}
                animate={{ y: 0 }}
                exit={{ y: 'calc(100% + 94px)' }}
                transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                className="absolute bottom-[94px] left-0 right-0 z-50"
              >
                <Frame138 />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
