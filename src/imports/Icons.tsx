import imgEllipse43 from "figma:asset/b63b6691bb487867fa1d94190dafca3d6268d2dc.png";

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

function Group34() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[48px]">
        <img alt="" className="block max-w-none size-full" height="48" src={imgEllipse43} width="48" />
      </div>
      <div className="[grid-area:1_/_1] ml-[30px] mt-[34px] relative size-[20px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <circle cx="10" cy="10" fill="var(--fill-0, white)" id="Ellipse 44" r="10" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] ml-[33px] mt-[37px] relative size-[14px]" data-name="Icons">
        <div className="absolute inset-0">
          <div className="absolute inset-[-7.143%]" style={{ "--stroke-0": "rgba(175, 175, 175, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
              <circle cx="8" cy="8" id="Ellipse 15" r="7" stroke="var(--stroke-0, #AFAFAF)" strokeWidth="2" />
            </svg>
          </div>
        </div>
        <Group11 />
      </div>
    </div>
  );
}

export default function Icons() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative size-full" data-name="Icons">
      <Group34 />
    </div>
  );
}