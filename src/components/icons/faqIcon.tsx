import React, { FC, SVGAttributes } from 'react';

const FaqIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="415"
      height="221"
      viewBox="0 0 415 221"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0L125 45.8696L250 0V165.13L125 211L0 165.13V0Z"
        fill="white"
      />
      <path
        d="M112.511 145.084C112.511 121.76 160 120.288 160 92.4143C160 77.7506 150.137 65 129.5 65C119.129 65 103.122 74.1818 99 85.8678M112.511 155.983V166"
        stroke="black"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M262 113L296.288 147C305.381 132.718 359 80 359 80"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M335.489 6.07365C243.444 -3.60132 195 53.7388 195 112.537C195 171.335 242.716 219 301.578 219C350.022 219 413 180.289 413 112.537C413 27.3662 326 5.30212 271 29.9995"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
};

export default FaqIcon;
