import React, { FC, SVGAttributes } from 'react';

const OutlineWhiteAnimatedIcon: FC<SVGAttributes<SVGSVGElement>> = ({
  className,
}) => {
  const css = `
  .rWiXpSbT_0{stroke-dasharray:616 618;stroke-dashoffset:-617;animation:rWiXpSbT_draw 1000ms ease-in-out 0ms forwards;}@keyframes rWiXpSbT_draw{100%{stroke-dashoffset:0;}}@keyframes rWiXpSbT_fade{0%{stroke-opacity:1;}92.98245614035088%{stroke-opacity:1;}100%{stroke-opacity:0;}}
  `;

  return (
    <svg
      width="255"
      height="97"
      viewBox="0 0 255 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}>
      <path
        d="M155.414 15.211C226.666 12.3867 250.026 22.4488 250.777 41.3967C252.121 75.3036 197.633 87.4509 129.145 90.1657C60.6559 92.8805 4.78261 81.9992 3.87784 59.1736C2.97307 36.3479 13.3227 13.9098 156.278 5.70298C172.328 4.98403 189.735 4.37397 211.519 5.9981"
        stroke="white"
        strokeWidth="3"
        strokeMiterlimit="10"
        className="rWiXpSbT_0"></path>
      <style>{css}</style>
    </svg>
  );
};

export default OutlineWhiteAnimatedIcon;
