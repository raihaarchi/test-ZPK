import { FC, SVGAttributes } from 'react';

const ArrowLeftSmall: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="5"
      height="9"
      viewBox="0 0 5 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        width="1.03571"
        height="6.21424"
        transform="matrix(-0.68965 0.724143 -0.68965 -0.724143 5 8.25)"
        fill="#0000FE"
      />
      <rect
        width="1.03571"
        height="6.21424"
        transform="matrix(0.68965 0.724143 -0.68965 0.724143 4.28564 0)"
        fill="#0000FE"
      />
    </svg>
  );
};

export default ArrowLeftSmall;
