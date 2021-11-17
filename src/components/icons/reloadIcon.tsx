import { FC, SVGAttributes } from 'react';

const ReloadIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="11"
      height="13"
      viewBox="0 0 11 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 7.80371C10 10.289 7.98528 12.3037 5.5 12.3037C3.01472 12.3037 1 10.289 1 7.80371C1 5.31843 3.01472 3.30371 5.5 3.30371H6.5"
        stroke="#0000FE"
        strokeLinecap="round"
      />
      <path d="M4.6964 1L6.99976 3.30336L4.6964 5.60672" stroke="#0000FE" />
    </svg>
  );
};

export default ReloadIcon;
