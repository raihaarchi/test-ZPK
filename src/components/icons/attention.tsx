import { FC, SVGAttributes } from 'react';

const Attention: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="15" cy="15" r="14" stroke="#0000FE" strokeWidth="2" />
      <line x1="15" y1="6" x2="15" y2="19" stroke="#0000FE" strokeWidth="2" />
      <line x1="15" y1="21" x2="15" y2="24" stroke="#0000FE" strokeWidth="2" />
    </svg>
  );
};

export default Attention;
