import { FC, SVGAttributes } from 'react';

const ArrowDown: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="15"
      height="10"
      viewBox="0 0 15 10"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M5.596 7.667l6.283-6.444a.97.97 0 011.396 0 1.03 1.03 0 010 1.432L6.992 9.099 5.596 7.667z" />
      <path d="M6.98 9.092L.699 2.648a1.031 1.031 0 010-1.432.97.97 0 011.396 0L8.377 7.66 6.98 9.092z" />
    </svg>
  );
};

export default ArrowDown;
