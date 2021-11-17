import { FC, SVGAttributes } from 'react';

const ArrowBreadCrumbs: FC<SVGAttributes<SVGSVGElement>> = () => {
  return (
    <svg
      width="5"
      height="9"
      viewBox="0 0 5 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect
        width="1.03571"
        height="6.21424"
        transform="matrix(0.68965 -0.724143 0.68965 0.724143 0 0.75)"
        fill="black"
      />
      <rect
        width="1.03571"
        height="6.21424"
        transform="matrix(-0.68965 -0.724143 0.68965 -0.724143 0.714844 9)"
        fill="black"
      />
    </svg>
  );
};

export default ArrowBreadCrumbs;
