import { FC, SVGAttributes } from 'react';

const ArrowLeft: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="39"
      height="24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 13.414L.586 12 11.192 1.393a1 1 0 011.415 1.415L2 13.414z"
        fill="currentColor"
      />
      <path
        d="M.59 12.004l1.414-1.414 10.603 10.602a1 1 0 11-1.414 1.415L.59 12.004z"
        fill="currentColor"
      />
      <path d="M3 13v-2h35a1 1 0 110 2H3z" fill="currentColor" />
    </svg>
  );
};

export default ArrowLeft;
