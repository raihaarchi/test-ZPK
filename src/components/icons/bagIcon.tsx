import { FC, SVGAttributes } from 'react';

const BagIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.762 24H3.238a2 2 0 01-1.988-2.224l1.463-13A2 2 0 014.701 7h14.598a2 2 0 011.988 1.776l1.463 13A2 2 0 0120.762 24z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M7 5.333c0-1.09.61-2.164 1.617-3.002C9.625 1.49 10.905 1 12 1c1.095 0 2.375.491 3.383 1.33C16.39 3.17 17 4.245 17 5.334V7H7V5.333z"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default BagIcon;
