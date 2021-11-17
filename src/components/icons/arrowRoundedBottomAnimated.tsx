import React, { FC, SVGAttributes } from 'react';

const ArrowRoundedBottomAnimated: FC<SVGAttributes<SVGSVGElement>> = ({
  className,
}) => {
  const css = `
  .BWSQldaJ_0{stroke-dasharray:237 239;stroke-dashoffset:-238;animation:BWSQldaJ_draw 400ms linear 300ms forwards;}.BWSQldaJ_1{stroke-dasharray:53 55;stroke-dashoffset:54;animation:BWSQldaJ_draw 92ms linear 700ms forwards;}@keyframes BWSQldaJ_draw{100%{stroke-dashoffset:0;}}@keyframes BWSQldaJ_fade{0%{stroke-opacity:1;}91.48936170212767%{stroke-opacity:1;}100%{stroke-opacity:0;}}
  `;

  return (
    <svg
      width="236"
      height="43"
      viewBox="0 0 236 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M231.344 12.8819C231.344 12.8819 94.4844 67.1733 1.72014 12.8825"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        className="BWSQldaJ_0"></path>
      <path
        d="M213.992 31.1443L233.207 13.0763L209.417 1.99999"
        stroke="black"
        strokeWidth="3"
        strokeMiterlimit="10"
        className="BWSQldaJ_1"></path>
      <style data-made-with="vivus-instant">{css}</style>
    </svg>
  );
};

export default ArrowRoundedBottomAnimated;
