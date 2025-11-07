import { ChevronLeft, Mic, MessageCircle, Volume2, AlertCircle, Radio } from 'lucide-react';
import LevelIcon from '../imports/LevelIcon';
import BottomNav from './BottomNav';

interface TodaysReviewProps {
  onBackClick?: () => void;
  onGameClick?: () => void;
  onMenuClick?: () => void;
  onGameHubClick?: () => void;
  onHomeClick?: () => void;
  onLeaderboardClick?: () => void;
  onProfileClick?: () => void;
  activeTab?: 'home' | 'leaderboard' | 'review' | 'profile' | 'gameHub';
}

export default function TodaysReview({ onBackClick, onGameClick, onMenuClick, onGameHubClick, onHomeClick, onLeaderboardClick, onProfileClick, activeTab }: TodaysReviewProps) {
  return (
    <div className="bg-white overflow-clip relative rounded-[55px] size-full">
      {/* Header */}
      <div className="absolute bg-white box-border content-stretch flex items-center left-0 right-0 px-[16px] py-[11px] top-[57px] z-10">
        <button 
          onClick={onBackClick}
          className="flex items-center justify-center w-[40px] h-[40px] hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-[#4b4b4b]" />
        </button>
        <div className="flex-1 text-center pr-[40px]">
          <h1 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[22px] tracking-[-0.44px]">
            Today's review
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="absolute top-[130px] bottom-0 left-0 right-0 overflow-y-auto px-[20px] pb-[120px] z-0">
        <div className="flex flex-col gap-[20px]">
          
          {/* Perfect Pronunciation */}
          <div 
            onClick={onGameClick}
            className="bg-white border-2 border-[#e5e5e5] rounded-[16px] p-[20px] hover:border-[#1cb0f6] transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-[16px]">
              <div className="bg-[#58cc02] rounded-[12px] p-[12px] flex items-center justify-center shrink-0">
                <Mic className="w-[32px] h-[32px] text-white" strokeWidth={2.5} />
              </div>
              <div className="flex-1">
                <h2 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[19px] tracking-[-0.38px]">
                  Perfect Pronunciation
                </h2>
                <p className="text-[#afafaf] text-[15px] mt-[4px]">
                  Practice speaking
                </p>
              </div>
              <ChevronLeft className="w-5 h-5 text-[#afafaf] rotate-180" />
            </div>
          </div>

          {/* Conversation Section */}
          <div className="bg-[#f7f7f7] rounded-[16px] p-[16px]">
            <h3 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[17px] tracking-[-0.34px] mb-[16px]">
              Conversation
            </h3>
            <div className="flex flex-col gap-[12px]">
              {/* Speak */}
              <div className="bg-white border-2 border-[#e5e5e5] rounded-[16px] p-[18px] hover:border-[#58cc02] transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[19px] tracking-[-0.38px]">
                    Speak
                  </h4>
                  <div className="bg-[#58cc02] rounded-[12px] p-[12px] flex items-center justify-center shrink-0">
                    <Mic className="w-[28px] h-[28px] text-white" strokeWidth={2.5} />
                  </div>
                </div>
              </div>

              {/* Listen */}
              <div className="bg-white border-2 border-[#e5e5e5] rounded-[16px] p-[18px] hover:border-[#1cb0f6] transition-colors cursor-pointer">
                <div className="flex items-center justify-between">
                  <h4 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[19px] tracking-[-0.38px]">
                    Listen
                  </h4>
                  <div className="rounded-[12px] p-[12px] flex items-center justify-center shrink-0 w-[52px] h-[52px]">
                    <LevelIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Your Collections Section */}
          <div>
            <h3 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[17px] tracking-[-0.34px] mb-[12px] px-[4px]">
              Your collections
            </h3>
            <div className="flex flex-col gap-[12px]">
              {/* Mistakes */}
              <div className="bg-white border-2 border-[#e5e5e5] rounded-[16px] p-[16px] hover:border-[#1cb0f6] transition-colors cursor-pointer">
                <div className="flex items-center gap-[16px]">
                  <div className="bg-[#ff9600] rounded-[12px] p-[10px] flex items-center justify-center shrink-0">
                    <AlertCircle className="w-[28px] h-[28px] text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[17px] tracking-[-0.34px]">
                      Mistakes
                    </h4>
                    <p className="text-[#afafaf] text-[14px] mt-[2px]">
                      Review your errors
                    </p>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-[#afafaf] rotate-180" />
                </div>
              </div>

              {/* Radio */}
              <div className="bg-white border-2 border-[#e5e5e5] rounded-[16px] p-[16px] hover:border-[#1cb0f6] transition-colors cursor-pointer">
                <div className="flex items-center gap-[16px]">
                  <div className="bg-[#ce82ff] rounded-[12px] p-[10px] flex items-center justify-center shrink-0">
                    <Radio className="w-[28px] h-[28px] text-white" strokeWidth={2.5} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-['DIN_2014_Rounded_VF:Bold',sans-serif] text-[#4b4b4b] text-[17px] tracking-[-0.34px]">
                      Radio
                    </h4>
                    <p className="text-[#afafaf] text-[14px] mt-[2px]">
                      Listen to podcasts
                    </p>
                  </div>
                  <ChevronLeft className="w-5 h-5 text-[#afafaf] rotate-180" />
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
        onReviewClick={() => {}} // Current screen
        onProfileClick={onProfileClick}
        onGameHubClick={onGameHubClick}
        onMenuClick={onMenuClick}
        activeTab={activeTab}
      />
    </div>
  );
}
