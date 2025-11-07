import svgPaths from "../imports/svg-enzxodotql";

interface LanguageSelectorProps {
  onSelectLanguage: (language: string) => void;
}

function FrenchFlag() {
  return (
    <div className="h-[67px] relative rounded-[15px] shrink-0 w-[83px]">
      <div className="h-[67px] overflow-clip relative rounded-[inherit] w-[83px]">
        <div className="absolute bg-[#ff4b4b] h-[54px] left-1/2 overflow-clip rounded-[11px] top-[calc(50%+0.5px)] translate-x-[-50%] translate-y-[-50%] w-[71px]" data-name="Flag">
          <div className="absolute bg-[#1cb0f6] bottom-0 left-[-4.22%] right-[67.61%] top-0" />
          <div className="absolute bg-neutral-200 bottom-0 left-[32.39%] right-[30.99%] top-0" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#1cb0f6] border-[3px] border-solid inset-[-1.5px] pointer-events-none rounded-[16.5px]" />
    </div>
  );
}

function SpanishFlag() {
  return (
    <div className="h-[67px] overflow-clip relative rounded-[15px] shrink-0 w-[83px]">
      <div className="absolute bg-[#ff4b4b] h-[54px] left-1/2 overflow-clip rounded-[11px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[71px]" data-name="Flag">
        <div className="absolute bg-[#ffc800] bottom-[27.27%] left-0 right-0 top-[27.27%]" />
        <div className="absolute bg-white inset-[40.91%_86.21%_40.91%_6.9%] rounded-[6px]" />
        <div className="absolute bg-white inset-[40.91%_58.62%_40.91%_34.48%] rounded-[6px]" />
        <div className="absolute bg-[#ff4b4b] inset-[36.36%_68.97%_36.36%_17.24%] rounded-bl-[20px] rounded-br-[20px] rounded-tl-[2px] rounded-tr-[2px]" />
      </div>
    </div>
  );
}

function GermanFlag() {
  return (
    <div className="h-[67px] overflow-clip relative rounded-[15px] shrink-0 w-[83px]">
      <div className="absolute bg-[#4b4b4b] h-[54px] left-1/2 overflow-clip rounded-[11px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[71px]" data-name="Flag">
        <div className="absolute bg-[#ff4b4b] h-[18px] left-0 right-0 top-1/2 translate-y-[-50%]" />
        <div className="absolute bg-[#ffc800] h-[18px] left-0 right-0 top-[calc(50%+18px)] translate-y-[-50%]" />
      </div>
    </div>
  );
}

function AddCourseIcon() {
  return (
    <div className="h-[67px] overflow-clip relative rounded-[15px] shrink-0 w-[83px]">
      <div className="absolute h-[54px] left-1/2 rounded-[11px] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[71px]" data-name="Flag">
        <div className="h-[54px] overflow-clip relative rounded-[inherit] w-[71px]">
          <div className="absolute h-[17.5px] left-[calc(50%+0.5px)] top-[calc(50%-0.25px)] translate-x-[-50%] translate-y-[-50%] w-[18px]">
            <div className="absolute inset-[-8.57%_-8.33%]" style={{ "--stroke-0": "rgba(119, 119, 119, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 21">
                <path d={svgPaths.p29b7aa20} id="Vector 54" stroke="var(--stroke-0, #777777)" strokeLinecap="round" strokeWidth="3" />
              </svg>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border-[#777777] border-[3px] border-solid inset-0 pointer-events-none rounded-[11px]" />
      </div>
    </div>
  );
}

export default function LanguageSelector({ onSelectLanguage }: LanguageSelectorProps) {
  return (
    <div className="bg-white rounded-t-[20px] overflow-hidden shadow-lg">
      <div className="px-[16px] py-[32px]">
        <h2 className="font-['nunito:ExtraBold',sans-serif] text-[#4b4b4b] text-[24px] text-center mb-[24px]">
          Choose your language
        </h2>
        
        <div className="flex flex-row items-center justify-center gap-[19px]">
          <button 
            onClick={() => onSelectLanguage('French')}
            className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 hover:scale-105 active:scale-95 transition-transform" 
            data-name="Selected Language"
          >
            <FrenchFlag />
            <div className="flex flex-col font-['DIN_2014_Rounded_VF:Bold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b4b4b] text-[22px] text-center text-nowrap tracking-[-0.44px] w-[86px]">
              <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">French</p>
            </div>
          </button>

          <button 
            onClick={() => onSelectLanguage('Spanish')}
            className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 hover:scale-105 active:scale-95 transition-transform" 
            data-name="Selected Language"
          >
            <SpanishFlag />
            <div className="flex flex-col font-['DIN_2014_Rounded_VF:Bold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b4b4b] text-[22px] text-center text-nowrap tracking-[-0.44px] w-[86px]">
              <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Spanish</p>
            </div>
          </button>

          <button 
            onClick={() => onSelectLanguage('German')}
            className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 hover:scale-105 active:scale-95 transition-transform" 
            data-name="Selected Language"
          >
            <GermanFlag />
            <div className="flex flex-col font-['DIN_2014_Rounded_VF:Bold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#4b4b4b] text-[22px] text-center text-nowrap tracking-[-0.44px] w-[86px]">
              <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">German</p>
            </div>
          </button>

          <div className="content-stretch flex flex-col gap-[3px] items-center relative shrink-0 opacity-50 cursor-not-allowed" data-name="Selected Language">
            <AddCourseIcon />
            <div className="flex flex-col font-['DIN_2014_Rounded_VF:Bold',sans-serif] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#afafaf] text-[22px] text-center text-nowrap tracking-[-0.44px] w-[86px]">
              <p className="[white-space-collapse:collapse] leading-[normal] overflow-ellipsis overflow-hidden">Course</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
