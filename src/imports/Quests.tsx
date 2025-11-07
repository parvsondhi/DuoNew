import svgPaths from "./svg-h5fggtgi0g";

function Frame70() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 w-full">
      <div className="basis-0 grow h-[28px] min-h-px min-w-px relative shrink-0" data-name="heading">
        <div className="absolute flex flex-col font-['nunito:ExtraBold',sans-serif] inset-0 justify-center leading-[0] not-italic text-[#4b4b4b] text-[28px]">
          <p className="leading-[normal]">Daily Quests</p>
        </div>
      </div>
      <div className="box-border content-stretch flex gap-[8px] items-center justify-end pl-[8px] pr-0 py-0 relative shrink-0" data-name="info-details/time">
        <div className="relative shrink-0 size-[20px]" data-name="size=xs">
          <div className="absolute inset-[8.333%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path d={svgPaths.p38420c00} fill="var(--fill-0, #FF9600)" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="flex flex-col font-['nunito:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#c18101] text-[16px] text-nowrap text-right uppercase">
          <p className="leading-[normal] whitespace-pre">22 hours</p>
        </div>
      </div>
    </div>
  );
}

function Fire() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="fire">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="fire">
          <path d={svgPaths.p18587380} fill="var(--fill-0, #FF9600)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p143d5800} fill="var(--fill-0, #FF9600)" fillRule="evenodd" id="Vector_2" />
          <path clipRule="evenodd" d={svgPaths.p2692f400} fill="var(--fill-0, #FF9600)" fillRule="evenodd" id="Vector_3" />
          <g id="Group">
            <path d={svgPaths.p202b0380} fill="var(--fill-0, #FFC200)" id="Vector_4" />
            <path clipRule="evenodd" d={svgPaths.p2a74a480} fill="var(--fill-0, #FFC200)" fillRule="evenodd" id="Vector_5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="bg-neutral-200 h-[20px] mr-[-12px] overflow-clip relative rounded-[360px] shrink-0 w-[239px]">
      <p className="absolute font-['nunito:Bold',sans-serif] leading-[normal] left-[calc(50%-8.5px)] not-italic text-[#8f8f8f] text-[12px] text-nowrap top-[calc(50%-8px)] whitespace-pre">1 / 3</p>
    </div>
  );
}

function Frame78() {
  return (
    <div className="absolute box-border content-stretch flex items-center left-0 pl-0 pr-[12px] py-0 top-0 w-[262px]">
      <Frame41 />
      <div className="mr-[-12px] overflow-clip relative shrink-0 size-[36px]" data-name="treasure-chest">
        <div className="absolute inset-[20.43%_25.68%_22.9%_26.37%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
            <path d={svgPaths.p69e1400} fill="var(--fill-0, #AA572A)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[13.89%_10.42%_12.01%_11.11%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 27">
            <path clipRule="evenodd" d={svgPaths.p1ce80f00} fill="var(--fill-0, #FFC800)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[19.39%_10.42%_12.01%_15.82%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 25">
            <path d={svgPaths.p2198bf00} fill="var(--fill-0, #FBE56D)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[18.84%_73.63%_41.58%_11.11%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 15">
            <path d={svgPaths.p3fc70c00} fill="var(--fill-0, #FBE56D)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[35.19%_35.81%_34.44%_37.27%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11">
            <path d={svgPaths.p145b5100} fill="var(--fill-0, #FFC800)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[40.25%_43.3%_39.5%_44.46%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path d={svgPaths.p2361ee80} fill="var(--fill-0, #CD7900)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RewardProgressBar() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="reward progress bar">
      <Frame78 />
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[262px]">
      <p className="font-['nunito:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">Start a streak</p>
      <RewardProgressBar />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
      <Fire />
      <Frame73 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="h-[20px] relative shrink-0 w-full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 361 20">
        <g id="Frame 98">
          <line id="Line 4" stroke="var(--stroke-0, #D0D0D0)" strokeWidth="2" x2="361" y1="19" y2="19" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[43.15%_34.19%_24.86%_40.04%]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 16">
        <g id="Group">
          <path d={svgPaths.pf5de000} fill="var(--fill-0, #FFC200)" id="Vector" />
          <path clipRule="evenodd" d={svgPaths.p121cde80} fill="var(--fill-0, #FFC200)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame42() {
  return (
    <div className="bg-neutral-200 h-[20px] mr-[-12px] overflow-clip relative rounded-[360px] shrink-0 w-[239px]">
      <p className="absolute font-['nunito:Bold',sans-serif] leading-[normal] left-[calc(50%-8.5px)] not-italic text-[#8f8f8f] text-[12px] text-nowrap top-[calc(50%-8px)] whitespace-pre">1 / 3</p>
    </div>
  );
}

function Frame79() {
  return (
    <div className="absolute box-border content-stretch flex items-center left-0 pl-0 pr-[12px] py-0 top-0 w-[262px]">
      <Frame42 />
      <div className="mr-[-12px] overflow-clip relative shrink-0 size-[36px]" data-name="treasure-chest">
        <div className="absolute inset-[20.43%_25.68%_22.9%_26.37%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 21">
            <path d={svgPaths.p69e1400} fill="var(--fill-0, #AA572A)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[13.89%_10.42%_12.01%_11.11%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 27">
            <path clipRule="evenodd" d={svgPaths.p1ce80f00} fill="var(--fill-0, #FFC800)" fillRule="evenodd" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[19.39%_10.42%_12.01%_15.82%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27 25">
            <path d={svgPaths.p2198bf00} fill="var(--fill-0, #FBE56D)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[18.84%_73.63%_41.58%_11.11%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 15">
            <path d={svgPaths.p3fc70c00} fill="var(--fill-0, #FBE56D)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[35.19%_35.81%_34.44%_37.27%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 11">
            <path d={svgPaths.p145b5100} fill="var(--fill-0, #FFC800)" id="Vector" />
          </svg>
        </div>
        <div className="absolute inset-[40.25%_43.3%_39.5%_44.46%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5 8">
            <path d={svgPaths.p2361ee80} fill="var(--fill-0, #CD7900)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function RewardProgressBar1() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="reward progress bar">
      <Frame79 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[262px]">
      <p className="font-['nunito:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[20px] text-black text-center text-nowrap whitespace-pre">Start a streak</p>
      <RewardProgressBar1 />
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-center relative shrink-0">
      <div className="relative shrink-0 size-[48px]" data-name="fire">
        <div className="absolute inset-0 overflow-clip" data-name="fire">
          <div className="absolute inset-[27.47%_16.87%_12.65%_22.72%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 29">
              <path d={svgPaths.pebc570} fill="var(--fill-0, #FF9600)" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[11.94%_22.38%_52.84%_28.23%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 17">
              <path clipRule="evenodd" d={svgPaths.p1f579980} fill="var(--fill-0, #FF9600)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
          <div className="absolute inset-[23.4%_27.5%_37.89%_22.72%]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 19">
              <path clipRule="evenodd" d={svgPaths.p344db700} fill="var(--fill-0, #FF9600)" fillRule="evenodd" id="Vector" />
            </svg>
          </div>
          <Group1 />
        </div>
      </div>
      <Frame74 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-[361px]">
      <Frame98 />
      <Frame96 />
    </div>
  );
}

function DailyQuests() {
  return (
    <div className="box-border content-stretch flex flex-col items-center justify-center px-0 py-[20px] relative rounded-[12px] shrink-0 w-full" data-name="Daily Quests">
      <div aria-hidden="true" className="absolute border-2 border-[#d0d0d0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame95 />
      {[...Array(2).keys()].map((_, i) => (
        <Frame97 key={i} />
      ))}
    </div>
  );
}

export default function Quests() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative size-full" data-name="Quests">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="title">
        <Frame70 />
      </div>
      <DailyQuests />
    </div>
  );
}