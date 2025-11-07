import svgPaths from "./svg-62tcgxe6rs";

function Group23() {
  return (
    <div className="absolute bottom-[-7.5px] left-[209px] top-px w-[218.5px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 219 109">
        <g id="Group 23">
          <path d={svgPaths.p166d3000} fill="var(--fill-0, #FFF2F9)" id="Vector 37" />
        </g>
      </svg>
    </div>
  );
}

function Group24() {
  return (
    <div className="absolute bottom-[0.06px] h-[69.941px] left-[calc(50%-0.059px)] translate-x-[-50%] w-[67.882px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 68 70">
        <g id="Group 24">
          <circle cx="34.4408" cy="48.4409" fill="var(--fill-0, #EB9AC9)" id="Ellipse 29" r="21.5" />
          <circle cx="33.9408" cy="36.9409" fill="var(--fill-0, #AC016A)" id="Ellipse 30" r="24" />
          <circle cx="33.9408" cy="33.9409" fill="var(--fill-0, #C4388E)" id="Ellipse 26" r="24" />
          <circle cx="34.4408" cy="34.4409" fill="var(--fill-0, #AC016A)" id="Ellipse 27" r="18.5" />
          <path d={svgPaths.p313ee100} fill="var(--fill-0, white)" fillOpacity="0.2" id="Ellipse 28" />
        </g>
      </svg>
    </div>
  );
}

function MonthlyChallenge() {
  return (
    <div className="h-[47px] relative shrink-0 w-[48px]" data-name="Monthly Challenge">
      <Group24 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-[40px]">
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Icons">
        <MonthlyChallenge />
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex font-['DIN_2014_Rounded_VF:Bold',sans-serif] h-[23px] items-center justify-between leading-[0] not-italic relative shrink-0 text-[#d84f9e] text-nowrap w-full">
      <div className="flex flex-col justify-center relative shrink-0 text-[21px] tracking-[-0.105px]">
        <p className="leading-[23px] text-nowrap whitespace-pre">December Challenge</p>
      </div>
      <div className="flex flex-col justify-center relative shrink-0 text-[16px] text-center tracking-[-0.32px]">
        <p className="leading-[normal] text-nowrap whitespace-pre">5 / 25</p>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="absolute inset-[32.14%_32.14%_34.29%_35.71%]">
      <div className="absolute bottom-0 left-0 right-[-22.22%] top-[-21.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
          <g id="Group 11">
            <circle cx="2" cy="3.69995" fill="var(--fill-0, #AFAFAF)" id="Ellipse 17" r="1.5" stroke="var(--stroke-0, #AFAFAF)" />
            <path d="M2 3.5L4.5 1" id="Vector 28" stroke="var(--stroke-0, #AFAFAF)" strokeLinecap="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="box-border content-stretch flex gap-[3px] items-center px-0 py-[4px] relative shrink-0 w-full">
      <div className="relative shrink-0 size-[14px]" data-name="Icons">
        <div className="absolute inset-0">
          <div className="absolute inset-[-7.143%]" style={{ "--stroke-0": "rgba(175, 175, 175, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" id="Ellipse 15" r="7" stroke="var(--stroke-0, #AFAFAF)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <Group11 />
      </div>
      <div className="flex flex-col font-['DIN_2014_Rounded_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#afafaf] text-[16px] text-center text-nowrap tracking-[-0.32px]">
        <p className="leading-[normal] whitespace-pre">10 days</p>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[4px] items-start px-0 py-[2px] relative shrink-0 w-[299px]">
      <Frame39 />
      <Frame35 />
    </div>
  );
}

export default function SpecialTask() {
  return (
    <div className="bg-[#ffe5f4] relative rounded-[10px] size-full" data-name="Special Task">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[26px] py-[22px] relative size-full">
          <Group23 />
          <Frame37 />
          <Frame36 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#d84f9e] border-solid inset-[-1px] pointer-events-none rounded-[11px]" />
    </div>
  );
}