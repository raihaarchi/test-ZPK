import { FC, SVGAttributes } from 'react';

const DeleteIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="19"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line
        x1="6.55671e-08"
        y1="4.63647"
        x2="18"
        y2="4.63648"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M13.5 18.0001H4.5L2.25 4.90918"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5.25 18.0001H13.6324L15.75 4.90918"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M5 4V2C5 1.44772 5.44772 1 6 1H12C12.5523 1 13 1.44772 13 2V4"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default DeleteIcon;
