import React, { FC, SVGAttributes } from 'react';

const CandyAnimatedIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  const css = `
  .SsgASVul_0{stroke-dasharray:304 306;stroke-dashoffset:305;animation:SsgASVul_draw 2000ms linear 0ms forwards, SsgASVul_fade 2000ms linear 0ms forwards;}@keyframes SsgASVul_draw{100%{stroke-dashoffset:0;}}@keyframes SsgASVul_fade{0%{stroke-opacity:0;}60%{stroke-opacity:1;}100%{stroke-opacity:1;}}
  `;

  return (
    <svg
      className={className}
      width="101"
      height="98"
      viewBox="0 0 101 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M77.2435 14.9274L93.7814 23.939C79.5552 37.4564 70.1511 27.9035 55.3494 27.1791C51.1766 26.9749 44.1734 31.6419 38.3863 37.4564C29.1237 46.7631 20.694 59.8752 26.5179 67.5903M71.7766 19.8048L77.2435 11.2108L69.4752 7.67163C67.926 10.3516 64.8005 16.5301 64.6919 19.8048C64.5833 23.0796 65.3129 26.9106 65.6914 28.4168M70.1921 33.7458C70.1921 33.7458 78.5454 39.4798 73.4232 48.2264C52.9638 77.9118 42.0667 83.4873 33.1718 70.4303M26.5179 67.5903L7.16854 71.9571C7.16854 71.9571 7.11112 80.3936 13.7372 81.9845C20.3633 83.5755 26.5178 92.5871 26.5178 92.5871C31.4954 86.4901 32.2977 75.247 26.5179 67.5903Z"
        stroke="#0000FE"
        strokeWidth="3"
        className="SsgASVul_0"></path>
      <style>{css}</style>
    </svg>
  );
};

export default CandyAnimatedIcon;
