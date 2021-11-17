import { FC, SVGAttributes } from 'react';

const SearchIconSmall: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="12"
      height="11"
      viewBox="0 0 12 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <line
        x1="8.62113"
        y1="7.54586"
        x2="11.4496"
        y2="10.3743"
        stroke="#0000FE"
      />
      <circle cx="5.43945" cy="5.07129" r="4.5" stroke="#0000FE" />
    </svg>
  );
};

export default SearchIconSmall;
