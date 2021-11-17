import React, { FC, SVGAttributes } from 'react';

const ArrowRoundedTopAnimated: FC<SVGAttributes<SVGSVGElement>> = ({
  className,
}) => {
  const css = `
  .zUGKmbrH_0{stroke-dasharray:217 219;stroke-dashoffset:-218;animation:zUGKmbrH_draw 300ms linear 900ms forwards;}.zUGKmbrH_1{stroke-dasharray:55 57;stroke-dashoffset:56;animation:zUGKmbrH_draw 122ms linear 1200ms forwards;}@keyframes zUGKmbrH_draw{100%{stroke-dashoffset:0;}}@keyframes zUGKmbrH_fade{0%{stroke-opacity:1;}91.66666666666667%{stroke-opacity:1;}100%{stroke-opacity:0;}}
  `;

  return (
    <svg
      width="214"
      height="46"
      viewBox="0 0 214 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M208.93 30.9262C208.93 30.9262 85.0012 -25.0649 1.00132 30.9256"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        className="zUGKmbrH_0"></path>
      <path
        d="M191.891 10.9199L210.892 31.2682L187.367 43.7424"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        className="zUGKmbrH_1"></path>
      <style>{css}</style>
    </svg>
  );
};

export default ArrowRoundedTopAnimated;
