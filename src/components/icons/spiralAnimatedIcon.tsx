import React, { FC, SVGAttributes } from 'react';

const SpiralAnimatedIcon: FC<SVGAttributes<SVGSVGElement>> = ({
  className,
}) => {
  const css = `
  .gLBUDTQF_0{stroke-dasharray:144 146;stroke-dashoffset:145;animation:gLBUDTQF_draw 1000ms linear 0ms forwards, gLBUDTQF_fade 1000ms linear 0ms forwards;}@keyframes gLBUDTQF_draw{100%{stroke-dashoffset:0;}}@keyframes gLBUDTQF_fade{0%{stroke-opacity:0;}70%{stroke-opacity:1;}100%{stroke-opacity:1;}}
  `;

  return (
    <svg
      className={className}
      width="64"
      height="86"
      viewBox="0 0 64 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M63.0658 75.1389C60.0362 63.8773 56.5988 53.5176 46.5197 46.4836C42.3364 43.5642 34.9486 40.3178 29.8445 43.1829C27.155 44.6926 26.0867 49.6287 29.8718 50.2904C34.9806 51.1836 38.2515 47.6779 37.907 42.656C37.0746 30.5226 19.1514 35.374 19.1514 35.374C25.8121 33.3948 26.8339 24.7296 24.6605 19.336C21.248 10.8678 10.749 10.1822 0.778669 11.8224"
        stroke="#0000FE"
        strokeWidth="3"
        className="gLBUDTQF_0"></path>
      <style>{css}</style>
    </svg>
  );
};

export default SpiralAnimatedIcon;
