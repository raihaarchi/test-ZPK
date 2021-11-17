import React, { FC, SVGAttributes } from 'react';

const OutlineAnimatedIcon: FC<SVGAttributes<SVGSVGElement>> = ({
  className,
}) => {
  const css = `
  .oWrQidDj_0{stroke-dasharray:849 851;stroke-dashoffset:850;animation:oWrQidDj_draw 1700ms ease-in-out 0ms forwards;}
@keyframes oWrQidDj_draw{100%{stroke-dashoffset:1700;}}
@keyframes oWrQidDj_fade{0%{stroke-opacity:1;}93.54838709677419%{stroke-opacity:1;}100%{stroke-opacity:0;}}
  `;

  return (
    <svg
      className={className}
      width="343"
      height="124"
      viewBox="0 0 343 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M209.933 16.4819C307.83 13.3911 340.099 27.9033 341.432 54.6851C343.817 102.611 269.112 119.086 175.012 122.057C80.9126 125.028 3.93788 108.948 2.33232 76.685C0.726763 44.4222 14.5975 12.849 210.97 3.05849C233.02 2.24532 256.939 1.60317 286.908 4.17306"
        stroke="#0000FE"
        strokeWidth="3"
        strokeMiterlimit="10"
        className="oWrQidDj_0"></path>
      <style>{css}</style>
    </svg>
  );
};

export default OutlineAnimatedIcon;
