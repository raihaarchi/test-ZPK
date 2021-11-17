import { FC, SVGAttributes } from 'react';

const MinusIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="30"
      height="2"
      viewBox="0 0 30 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="30" height="2" rx="1" fill="currentColor" />
    </svg>
  );
};

export default MinusIcon;
