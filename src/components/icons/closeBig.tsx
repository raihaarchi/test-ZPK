import React, { FC, SVGAttributes } from 'react';

const CloseBig: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        x="21.8994"
        y="0.686523"
        width="2"
        height="30"
        rx="1"
        transform="rotate(45 21.8994 0.686523)"
        fill="#0000FE"
      />
      <rect
        x="23.3135"
        y="21.8994"
        width="2"
        height="30"
        rx="1"
        transform="rotate(135 23.3135 21.8994)"
        fill="#0000FE"
      />
    </svg>
  );
};

export default CloseBig;
