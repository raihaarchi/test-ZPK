import { FC, SVGAttributes } from 'react';

const Circle: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="265"
      height="265"
      viewBox="0 0 265 265"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="132.5" cy="132.5" r="132.5" fill="#87B6B3" />
    </svg>
  );
};

export default Circle;
