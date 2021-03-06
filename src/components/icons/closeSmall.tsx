import React, { FC, SVGAttributes } from 'react';

const CloseSmall: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        y="0.707031"
        width="1"
        height="13"
        transform="rotate(-45 0 0.707031)"
        fill="#0000FE"
      />
      <rect
        x="9.19238"
        width="1"
        height="13"
        transform="rotate(45 9.19238 0)"
        fill="#0000FE"
      />
    </svg>
  );
};

export default CloseSmall;
