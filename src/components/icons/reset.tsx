import { FC, SVGAttributes } from 'react';

const Reset: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="20"
      viewBox="0 0 18 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 11.2275C17 15.0432 13.4183 18.1365 9 18.1365C4.58172 18.1365 1 15.0432 1 11.2275C1 7.41166 4.58172 4.31836 9 4.31836H10.7778"
        stroke="#0000FE"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7.57197 0.660163L11.6668 4.19663L7.57197 7.73309"
        stroke="#0000FE"
        strokeWidth="2"
      />
    </svg>
  );
};

export default Reset;
