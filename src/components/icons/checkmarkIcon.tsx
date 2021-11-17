import React, { FC, SVGAttributes } from 'react';

const CheckmarkIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="13"
      height="11"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M3.219 8.407L10.718.716a.97.97 0 011.396 0 1.031 1.031 0 010 1.432L4.615 9.839 3.219 8.407z" />
      <path d="M4.604 9.832L.698 5.826a1.031 1.031 0 010-1.432.97.97 0 011.396 0L6 8.4 4.604 9.832z" />
    </svg>
  );
};

export default CheckmarkIcon;
