import { FC, SVGAttributes } from 'react';

const PlusIconMob: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect y="8" width="18" height="2" rx="1" fill="currentColor" />
      <rect
        x="10"
        width="18"
        height="2"
        rx="1"
        transform="rotate(90 10 0)"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlusIconMob;
