import React, { FC, SVGAttributes } from 'react';

const BoomAnimatedIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  const css = `
  .uCrNvOoB_0{stroke-dasharray:43 45;stroke-dashoffset:44;animation:uCrNvOoB_draw 333ms linear 0ms forwards, uCrNvOoB_fade 2000ms linear 0ms forwards;}.uCrNvOoB_1{stroke-dasharray:40 42;stroke-dashoffset:-41;animation:uCrNvOoB_draw 333ms linear 166ms forwards, uCrNvOoB_fade 2000ms linear 0ms forwards;}.uCrNvOoB_2{stroke-dasharray:60 62;stroke-dashoffset:-61;animation:uCrNvOoB_draw 333ms linear 333ms forwards, uCrNvOoB_fade 2000ms linear 0ms forwards;}@keyframes uCrNvOoB_draw{100%{stroke-dashoffset:0;}}@keyframes uCrNvOoB_fade{0%{stroke-opacity:0;}60%{stroke-opacity:1;}100%{stroke-opacity:1;}}
  `;

  return (
    <svg
      className={className}
      width="117"
      height="111"
      viewBox="0 0 117 111"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M85.6866 73.5526C89.9438 67.886 99.0567 32.9787 99.0567 32.9787"
        stroke="#0000FE"
        strokeWidth="3"
        className="uCrNvOoB_0"></path>
      <path
        d="M16.8691 49.3818C20.663 53.9843 41.5398 71.4576 46.0127 75.3752"
        stroke="#0000FE"
        strokeWidth="3"
        className="uCrNvOoB_1"></path>
      <path
        d="M49.1592 18.126C50.5086 25.503 60.5896 68.5281 62.7363 75.6143"
        stroke="#0000FE"
        strokeWidth="3"
        className="uCrNvOoB_2"></path>
      <style>{css}</style>
    </svg>
  );
};

export default BoomAnimatedIcon;
