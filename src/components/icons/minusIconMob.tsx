import { FC, SVGAttributes } from 'react';

const MinusIconMob: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="2"
      viewBox="0 0 18 2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect width="18" height="2" rx="1" fill="currentColor" />
    </svg>
  );
};

export default MinusIconMob;
