import React, { FC, SVGAttributes } from 'react';

const LeafAnimatedIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  const css = `
  .MPlUoXez_0{stroke-dasharray:146 148;stroke-dashoffset:147;animation:MPlUoXez_draw 666ms linear 0ms forwards, MPlUoXez_fade 666ms linear 0ms forwards;}.MPlUoXez_1{stroke-dasharray:44 46;stroke-dashoffset:45;animation:MPlUoXez_draw 666ms linear 166ms forwards, MPlUoXez_fade 666ms linear 0ms forwards;}.MPlUoXez_2{stroke-dasharray:89 91;stroke-dashoffset:90;animation:MPlUoXez_draw 666ms linear 333ms forwards, MPlUoXez_fade 666ms linear 0ms forwards;}@keyframes MPlUoXez_draw{100%{stroke-dashoffset:0;}}@keyframes MPlUoXez_fade{0%{stroke-opacity:0;}70%{stroke-opacity:1;}100%{stroke-opacity:1;}}
  `;

  return (
    <svg
      className={className}
      width="93"
      height="96"
      viewBox="0 0 93 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M73.5 16.0994C66.3764 11.5473 59.071 8.46982 52.7201 8.80144C36.1927 9.66442 14.2291 23.3999 5.31321 30.1598C9.32125 32.6595 22.378 40.2002 42.5407 50.3656C46.3605 52.1217 57.2999 55.107 70.4999 52.9997"
        stroke="#0000FE"
        strokeWidth="3"
        className="MPlUoXez_0"></path>
      <path
        d="M26.2557 29.9427C32.7302 28.6486 50.3433 27.6483 68.9997 33.9999"
        stroke="#0000FE"
        strokeWidth="3"
        className="MPlUoXez_1"></path>
      <path
        d="M73.5 66.4998C73.5 66.4998 76.5507 69.5601 60.6605 76.395C44.7704 83.2299 34.041 85.789 30.6625 86.2142C33.3042 77.912 40.9955 59.5824 50.6276 52.6817"
        stroke="#0000FE"
        strokeWidth="3"
        className="MPlUoXez_2"></path>
      <style>{css}</style>
    </svg>
  );
};

export default LeafAnimatedIcon;
