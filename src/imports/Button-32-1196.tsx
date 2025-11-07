function Frame30() {
  return (
    <div className="absolute bg-[#58cc02] box-border content-stretch flex gap-[8px] items-center justify-center left-[0.5px] overflow-clip px-[154px] py-[12px] right-[0.5px] rounded-[13px] top-[calc(50%-2px)] translate-y-[-50%]">
      <div className="flex flex-col font-['DIN_2014_Rounded_VF:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-center text-nowrap text-white tracking-[-0.32px] uppercase">
        <p className="leading-[normal] whitespace-pre">Continue</p>
      </div>
    </div>
  );
}

export default function Button() {
  return (
    <div className="bg-[#478700] overflow-clip relative rounded-[13px] size-full" data-name="Button">
      <Frame30 />
    </div>
  );
}