import { FC, SVGAttributes } from 'react';

const RectanglesIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="10"
      height="12"
      viewBox="0 0 10 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="7" height="9" stroke="#0000FE" />
      <path
        d="M7.49987 9.5L7.49988 9.00001L7.49994 2.5H9.49995V11.5H2.49994L2.49989 9.5H6.99988H7.49987Z"
        stroke="#0000FE"
      />
    </svg>
  );
};

export default RectanglesIcon;
