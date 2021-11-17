import { FC, SVGAttributes } from 'react';

const TickLeftIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="5"
      height="10"
      viewBox="0 0 5 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        width="1.04811"
        height="6.28869"
        transform="matrix(-0.681485 0.731832 -0.681485 -0.731832 5 8.48294)"
        fill="currentColor"
      />
      <rect
        width="1.04811"
        height="6.28869"
        transform="matrix(0.681485 0.731832 -0.681485 0.731832 4.28564 0.0454712)"
        fill="currentColor"
      />
    </svg>
  );
};

export default TickLeftIcon;
