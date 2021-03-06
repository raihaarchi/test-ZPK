import { FC, SVGAttributes } from 'react';

const OffIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="21"
      height="24"
      viewBox="0 0 21 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 0.000711441L21 0V20.6946C21 22.1979 19.4037 23.1638 18.072 22.4663L11.428 18.9861C10.8468 18.6817 10.1532 18.6817 9.57199 18.9861L2.92801 22.4663C1.59635 23.1638 0 22.1979 0 20.6946V0.000711441Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default OffIcon;
