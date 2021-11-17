import { FC, SVGAttributes } from 'react';

const bookmarkIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="22"
      height="25"
      viewBox="0 0 22 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 2a1 1 0 011-1h18a1 1 0 011 1v19.703a1 1 0 01-1.462.887l-7.152-3.725a3 3 0 00-2.772 0L2.462 22.59A1 1 0 011 21.703V2.001z"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default bookmarkIcon;
