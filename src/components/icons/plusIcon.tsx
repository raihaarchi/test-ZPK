import { FC, SVGAttributes } from 'react';

const PlusIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect y="14" width="30.0001" height="2" rx="1" fill="currentColor" />
      <rect
        x="16.001"
        width="30"
        height="2"
        rx="0.999999"
        transform="rotate(90 16.001 0)"
        fill="currentColor"
      />
    </svg>
  );
};

export default PlusIcon;
