import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../imports/svg-roawya0noe';
import svgPaths23 from '../imports/svg-gj2grkfzb4';
import svgPathsQuests from '../imports/svg-h5fggtgi0g';
import imgDuo from 'figma:asset/df68510e80d943df9ac7ffd6050d9167aab6c725.png';
import BottomNav from './BottomNav';
import LanguageSelector from './LanguageSelector';

// Clock icon for daily timer
function ClockIcon() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <div className="absolute inset-[8.333%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
          <path d={svgPathsQuests.p38420c00} fill="var(--fill-0, #FF9600)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

// Decorative background pattern for open games
function Group23() {
  return (
    <div className="absolute inset-[33.58%_62.5%_39.64%_17.5%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 86 38">
        <g id="Group 23" opacity="0.1">
          <path d={svgPaths23.pb9c17f60} fill="var(--fill-0, #D84F9E)" id="Vector 54" />
          <path d={svgPaths23.p2a4c5c80} fill="var(--fill-0, #D84F9E)" id="Vector 55" />
          <path d={svgPaths23.p84fa1cc0} fill="var(--fill-0, #D84F9E)" id="Vector 56" />
          <path d={svgPaths23.pfd45dfd0} fill="var(--fill-0, #D84F9E)" id="Vector 57" />
          <path d={svgPaths23.p6e7cf1a0} fill="var(--fill-0, #D84F9E)" id="Vector 58" />
          <path d={svgPaths23.p94e80f60} fill="var(--fill-0, #D84F9E)" id="Vector 59" />
          <path d={svgPaths23.p914f3a80} fill="var(--fill-0, #D84F9E)" id="Vector 60" />
          <path d={svgPaths23.p0f388690} fill="var(--fill-0, #D84F9E)" id="Vector 61" />
          <path d={svgPaths23.p4ab5e4a0} fill="var(--fill-0, #D84F9E)" id="Vector 62" />
        </g>
      </svg>
    </div>
  );
}

// Flame icon component
function FlameIcon() {
  return (
    <div className="h-[32px] relative shrink-0 w-[25px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
        <g id="Group 3">
          <path d={svgPaths.p1bdb2f80} fill="var(--fill-0, #FF9600)" id="Vector 3" />
          <path d={svgPaths.p80e8180} fill="var(--fill-0, #FFC800)" id="Vector 4" />
        </g>
      </svg>
    </div>
  );
}

// Trophy icon component
function TrophyIcon() {
  return (
    <div className="h-[32px] relative shrink-0 w-[28px]">
      <div className="absolute bottom-0 left-[-3.99%] right-[-3.99%] top-[-3.73%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
          <g id="Group 5">
            <path d={svgPaths.p28baa430} fill="var(--fill-0, #CD7900)" id="Polygon 2" />
            <path d="M8.52133 25.5069H18.0213" id="Vector 20" stroke="var(--stroke-0, #FF9600)" strokeLinecap="round" strokeWidth="3" />
            <path d={svgPaths.p38d90c00} fill="var(--fill-0, #FF9600)" id="Vector" />
            <g id="Mask group">
              <mask height="21" id="mask0_trophy_1" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="27" x="0" y="1">
                <path d={svgPaths.p38d90c00} fill="var(--fill-0, #FFC800)" id="Vector_2" />
              </mask>
              <g mask="url(#mask0_trophy_1)">
                <rect fill="var(--fill-0, #FFC800)" height="15" id="Rectangle 15" transform="rotate(-42.6671 -8.65445 11.9947)" width="41" x="-8.65445" y="11.9947" />
              </g>
            </g>
            <path d={svgPaths.p38d90c00} id="Vector_3" stroke="var(--stroke-0, #FF9600)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

// Lightning bolt icon
function LightningIcon() {
  return (
    <div className="h-[32px] relative shrink-0 w-[24px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
        <g id="Group 10">
          <path clipRule="evenodd" d={svgPaths.p1901a980} fill="var(--fill-0, #FFD900)" fillRule="evenodd" id="Vector 25 (Stroke)" />
          <path d={svgPaths.p2c36b780} fill="var(--fill-0, #F7C100)" id="Vector 26" />
          <path d={svgPaths.p1481fd00} fill="var(--fill-0, #FFEF8F)" id="Vector 27" />
        </g>
      </svg>
    </div>
  );
}

// User plus icon
function UserPlusIcon() {
  return (
    <div className="h-[30px] relative shrink-0 w-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 19">
        <g id="Group 31">
          <circle cx="7" cy="5" fill="var(--fill-0, #1CB0F6)" id="Ellipse 42" r="5" />
          <path d={svgPaths.p28a63500} fill="var(--fill-0, #1CB0F6)" id="Rectangle 32" />
          <path d="M19 5.5V13M15 9.5H23" id="Vector 50" stroke="var(--stroke-0, #1CB0F6)" strokeLinecap="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

interface GameHubProps {
  onBackClick?: () => void;
  onMenuClick?: () => void;
  onHomeClick?: () => void;
  onLeaderboardClick?: () => void;
  onReviewClick?: () => void;
  onProfileClick?: () => void;
  onGameHubClick?: () => void;
  onWordCollectionClick?: (language: string) => void;
  activeTab?: 'home' | 'leaderboard' | 'review' | 'profile' | 'gameHub';
}

export default function GameHub({ onBackClick, onMenuClick, onHomeClick, onLeaderboardClick, onReviewClick, onProfileClick, onGameHubClick, onWordCollectionClick, activeTab }: GameHubProps) {
  const [showLanguageSelector, setShowLanguageSelector] = useState(false);

  const handleLanguageSelect = (language: string) => {
    setShowLanguageSelector(false);
    if (onWordCollectionClick) {
      onWordCollectionClick(language);
    }
  };

  return (
    <div className="relative bg-white h-full w-full overflow-hidden">
      {/* Banner Header */}
      <div className="absolute left-0 right-0 top-0 z-20 bg-gradient-to-br from-[#4b4bbe] via-[#5c5cd6] to-[#7c7ce9] overflow-hidden">
        <div className="relative flex items-center justify-between px-[20px] py-[24px] min-h-[140px]">
          {/* Left content */}
          <div className="flex flex-col gap-[8px] z-10 flex-1">
            <h1 className="font-['nunito:ExtraBold',sans-serif] text-white text-[32px] leading-[normal]">
              Game Hub
            </h1>
            <p className="font-['nunito:Regular',sans-serif] text-white/90 text-[16px] leading-[normal] max-w-[240px]">
              Play fun games to practice and earn extra XP!
            </p>
          </div>
          
          {/* Duo character */}
          <div className="absolute right-[-10px] bottom-0 h-[140px] w-[140px]">
            <img 
              src={imgDuo} 
              alt="Duo" 
              className="w-full h-full object-contain object-bottom"
            />
          </div>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="absolute left-0 right-0 top-[140px] bottom-[94px] overflow-y-auto z-0">
        <div className="px-[16px] py-[24px] space-y-[32px]">
          
          {/* Daily Games Section */}
          <div>
            <div className="content-stretch flex items-center justify-center relative shrink-0 w-full mb-[20px]">
              <div className="basis-0 grow h-[28px] min-h-px min-w-px relative">
                <div className="flex flex-col font-['nunito:ExtraBold',sans-serif] justify-center leading-[0] not-italic text-[#4b4b4b] text-[28px]">
                  <p className="leading-[normal]">Daily Games</p>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[8px] items-center justify-end pl-[8px] pr-0 py-0 relative shrink-0">
                <ClockIcon />
                <div className="flex flex-col font-['nunito:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c18101] text-[16px] text-nowrap text-right uppercase">
                  <p className="leading-[normal] whitespace-pre">22 hours</p>
                </div>
              </div>
            </div>

            {/* Daily Game Cards */}
            <div className="space-y-[12px]">
              {/* Word Collection Card */}
              <button 
                onClick={() => setShowLanguageSelector(true)}
                className="w-full box-border rounded-[14px] border-2 border-neutral-200 p-[20px] bg-white hover:bg-gray-50 active:scale-[0.98] transition-all text-left"
              >
                <div className="flex items-center gap-[12px]">
                  <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#ddf4ff] rounded-[12px] shrink-0">
                    <TrophyIcon />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['nunito:Bold',sans-serif] text-black text-[20px] leading-[normal]">
                      Word Collection
                    </h3>
                    <div className="flex items-center gap-[4px] mt-[2px]">
                      <span className="font-['nunito:Bold',sans-serif] text-[#afafaf] text-[16px] leading-[normal]">
                        +15 XP
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Speed Match Card */}
              <button className="w-full box-border rounded-[14px] border-2 border-neutral-200 p-[20px] bg-white hover:bg-gray-50 active:scale-[0.98] transition-all text-left">
                <div className="flex items-center gap-[12px]">
                  <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#ffe8e8] rounded-[12px] shrink-0">
                    <FlameIcon />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['nunito:Bold',sans-serif] text-black text-[20px] leading-[normal]">
                      Speed Match
                    </h3>
                    <div className="flex items-center gap-[4px] mt-[2px]">
                      <span className="font-['nunito:Bold',sans-serif] text-[#afafaf] text-[16px] leading-[normal]">
                        +20 XP
                      </span>
                    </div>
                  </div>
                </div>
              </button>

              {/* Listening Challenge Card */}
              <button className="w-full box-border rounded-[14px] border-2 border-neutral-200 p-[20px] bg-white hover:bg-gray-50 active:scale-[0.98] transition-all text-left">
                <div className="flex items-center gap-[12px]">
                  <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#fff4e6] rounded-[12px] shrink-0">
                    <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24">
                      <path d="M12 14.5C13.66 14.5 15 13.16 15 11.5V5.5C15 3.84 13.66 2.5 12 2.5C10.34 2.5 9 3.84 9 5.5V11.5C9 13.16 10.34 14.5 12 14.5Z" fill="#FF9600"/>
                      <path d="M17 11.5C17 14.81 14.31 17.5 11 17.5C7.69 17.5 5 14.81 5 11.5H3C3 15.41 5.94 18.62 9.75 19.41V22.5H14.25V19.41C18.06 18.62 21 15.41 21 11.5H19C19 11.5 17 11.5 17 11.5Z" fill="#FFC800"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-['nunito:Bold',sans-serif] text-black text-[20px] leading-[normal]">
                      Listen & Type
                    </h3>
                    <div className="flex items-center gap-[4px] mt-[2px]">
                      <span className="font-['nunito:Bold',sans-serif] text-[#afafaf] text-[16px] leading-[normal]">
                        +10 XP
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Two-Player Games Section */}
          <div>
            <div className="flex items-center gap-[12px] mb-[16px]">
              <h2 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[26px] tracking-[-0.52px]">
                Play with Friends
              </h2>
              <UserPlusIcon />
            </div>
            <p className="font-['DIN_2014_Rounded_VF:Regular',sans-serif] text-[#777777] text-[16px] tracking-[-0.16px] mb-[20px]">
              Challenge your friends and compete for the high score
            </p>

            {/* Open Games Section */}
            <div className="mb-[24px]">
              <h3 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[18px] tracking-[-0.18px] mb-[12px]">
                Open Games
              </h3>
              
              {/* Active Game Card */}
              <div className="bg-[#ffe5f4] relative rounded-[10px]">
                <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[26px] py-[22px] relative">
                  <Group23 />
                  {/* Friend Avatar */}
                  <div className="flex items-center justify-center w-[48px] h-[48px] bg-[#eb9ac9] rounded-full shrink-0">
                    <span className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-white text-[18px]">
                      SM
                    </span>
                  </div>
                  
                  {/* Game Info */}
                  <div className="flex-1 min-w-0 px-[16px]">
                    <div className="flex items-center justify-between mb-[4px]">
                      <h4 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#d84f9e] text-[21px] tracking-[-0.105px] leading-[23px]">
                        Sarah M.
                      </h4>
                      <div className="px-[8px] py-[2px] bg-[#58cc02] rounded-[8px]">
                        <span className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-white text-[12px] tracking-[-0.12px] uppercase">
                          Your Turn
                        </span>
                      </div>
                    </div>
                    <p className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#afafaf] text-[16px] tracking-[-0.32px] leading-[normal]">
                      Word Duel • Round 2 of 3
                    </p>
                  </div>
                </div>
                <div aria-hidden="true" className="absolute border-2 border-[#d84f9e] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
              </div>
            </div>

            {/* Two-Player Game Cards */}
            <div className="space-y-[12px]">
              {/* Word Duel Card */}
              <div className="box-border rounded-[14px] border-2 border-[#1cb0f6] p-[20px] bg-[#f0f9ff]">
                <div className="flex items-start justify-between mb-[16px]">
                  <div className="flex items-center gap-[12px]">
                    <div className="flex items-center justify-center w-[48px] h-[48px] bg-white rounded-[12px] border-2 border-[#1cb0f6]">
                      <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24">
                        <path d="M9 2L7 12L2 7L9 2Z" fill="#1CB0F6"/>
                        <path d="M15 2L17 12L22 7L15 2Z" fill="#1CB0F6"/>
                        <path d="M9 22L7 12L2 17L9 22Z" fill="#63C9F9"/>
                        <path d="M15 22L17 12L22 17L15 22Z" fill="#63C9F9"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[21px] tracking-[-0.105px] leading-[23px]">
                        Word Duel
                      </h3>
                      <div className="flex items-center gap-[6px] mt-[4px]">
                        <LightningIcon />
                        <span className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#ffc800] text-[16px] tracking-[-0.32px]">
                          +25 XP each
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['DIN_2014_Rounded_VF:Regular',sans-serif] text-[#777777] text-[16px] tracking-[-0.16px] mb-[16px]">
                  Race against a friend to translate more words correctly!
                </p>
                <div className="w-full bg-[#1989c4] overflow-clip relative rounded-[13px] h-[50px]">
                  <button className="absolute bg-[#1cb0f6] hover:bg-[#1989c4] active:scale-95 transition-all box-border content-stretch flex gap-[8px] items-center justify-center left-[0.5px] overflow-clip px-[154px] py-[12px] right-[0.5px] rounded-[13px] top-[calc(50%-2px)] translate-y-[-50%]">
                    <div className="flex flex-col font-['DIN_2014_Rounded_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.32px] uppercase">
                      <p className="leading-[normal] whitespace-pre">Challenge Friend</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Conversation Battle Card */}
              <div className="box-border rounded-[14px] border-2 border-[#ce82ff] p-[20px] bg-[#faf5ff]">
                <div className="flex items-start justify-between mb-[16px]">
                  <div className="flex items-center gap-[12px]">
                    <div className="flex items-center justify-center w-[48px] h-[48px] bg-white rounded-[12px] border-2 border-[#ce82ff]">
                      <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24">
                        <path d="M8 12C8 10.343 9.343 9 11 9H13C14.657 9 16 10.343 16 12C16 13.657 14.657 15 13 15H11C9.343 15 8 13.657 8 12Z" fill="#CE82FF"/>
                        <path d="M4 6C4 4.343 5.343 3 7 3H9C10.657 3 12 4.343 12 6C12 7.657 10.657 9 9 9H7C5.343 9 4 7.657 4 6Z" fill="#A239FA"/>
                        <path d="M12 18C12 16.343 13.343 15 15 15H17C18.657 15 20 16.343 20 18C20 19.657 18.657 21 17 21H15C13.343 21 12 19.657 12 18Z" fill="#E0C1FF"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[21px] tracking-[-0.105px] leading-[23px]">
                        Chat Challenge
                      </h3>
                      <div className="flex items-center gap-[6px] mt-[4px]">
                        <LightningIcon />
                        <span className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#ffc800] text-[16px] tracking-[-0.32px]">
                          +30 XP each
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['DIN_2014_Rounded_VF:Regular',sans-serif] text-[#777777] text-[16px] tracking-[-0.16px] mb-[16px]">
                  Build conversations faster than your opponent!
                </p>
                <div className="w-full bg-[#a239fa] overflow-clip relative rounded-[13px] h-[50px]">
                  <button className="absolute bg-[#ce82ff] hover:bg-[#b86ee6] active:scale-95 transition-all box-border content-stretch flex gap-[8px] items-center justify-center left-[0.5px] overflow-clip px-[154px] py-[12px] right-[0.5px] rounded-[13px] top-[calc(50%-2px)] translate-y-[-50%]">
                    <div className="flex flex-col font-['DIN_2014_Rounded_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.32px] uppercase">
                      <p className="leading-[normal] whitespace-pre">Challenge Friend</p>
                    </div>
                  </button>
                </div>
              </div>

              {/* Pronunciation Face-Off Card */}
              <div className="box-border rounded-[14px] border-2 border-[#ff9600] p-[20px] bg-[#fff9f0]">
                <div className="flex items-start justify-between mb-[16px]">
                  <div className="flex items-center gap-[12px]">
                    <div className="flex items-center justify-center w-[48px] h-[48px] bg-white rounded-[12px] border-2 border-[#ff9600]">
                      <svg className="w-[28px] h-[28px]" fill="none" viewBox="0 0 24 24">
                        <circle cx="8" cy="8" r="6" fill="#FF9600"/>
                        <circle cx="16" cy="16" r="6" fill="#FFC800"/>
                        <path d="M8 6C9.10457 6 10 6.89543 10 8C10 9.10457 9.10457 10 8 10C6.89543 10 6 9.10457 6 8C6 6.89543 6.89543 6 8 6Z" fill="white"/>
                        <path d="M16 14C17.1046 14 18 14.8954 18 16C18 17.1046 17.1046 18 16 18C14.8954 18 14 17.1046 14 16C14 14.8954 14.8954 14 16 14Z" fill="white"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[21px] tracking-[-0.105px] leading-[23px]">
                        Speak Off
                      </h3>
                      <div className="flex items-center gap-[6px] mt-[4px]">
                        <LightningIcon />
                        <span className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#ffc800] text-[16px] tracking-[-0.32px]">
                          +20 XP each
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="font-['DIN_2014_Rounded_VF:Regular',sans-serif] text-[#777777] text-[16px] tracking-[-0.16px] mb-[16px]">
                  Who can pronounce French phrases better? Let's find out!
                </p>
                <div className="w-full bg-[#cd7900] overflow-clip relative rounded-[13px] h-[50px]">
                  <button className="absolute bg-[#ff9600] hover:bg-[#e08600] active:scale-95 transition-all box-border content-stretch flex gap-[8px] items-center justify-center left-[0.5px] overflow-clip px-[154px] py-[12px] right-[0.5px] rounded-[13px] top-[calc(50%-2px)] translate-y-[-50%]">
                    <div className="flex flex-col font-['DIN_2014_Rounded_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.32px] uppercase">
                      <p className="leading-[normal] whitespace-pre">Challenge Friend</p>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

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

      {/* Language Selection Popup */}
      <AnimatePresence>
        {showLanguageSelector && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 bg-black/50 z-40"
              onClick={() => setShowLanguageSelector(false)}
            />
            <motion.div
              initial={{ y: 'calc(100% + 94px)' }}
              animate={{ y: 0 }}
              exit={{ y: 'calc(100% + 94px)' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="absolute bottom-[94px] left-0 right-0 z-50"
            >
              <LanguageSelector onSelectLanguage={handleLanguageSelect} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
