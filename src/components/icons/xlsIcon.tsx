import { FC, SVGAttributes } from 'react';

const XlsIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
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
        d="M7.49999 9.5L7.5 9.00001L7.50007 2.5H9.50007V11.5H2.50006L2.50001 9.5H7H7.49999Z"
        stroke="#0000FE"
      />
    </svg>
  );
};

export default XlsIcon;
