import { FC, SVGAttributes } from 'react';

const CheckIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="13"
      height="11"
      viewBox="0 0 13 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.21973 8.40698L10.7186 0.715887C11.1042 0.320453 11.7293 0.320454 12.1148 0.715887C12.5004 1.11132 12.5004 1.75245 12.1148 2.14788L4.61593 9.83897L3.21973 8.40698Z"
        fill="currentColor"
      />
      <path
        d="M4.60434 9.8325L0.698267 5.82632C0.312715 5.43088 0.312714 4.78976 0.698267 4.39432C1.08382 3.99889 1.70892 3.99889 2.09447 4.39432L6.00055 8.40051L4.60434 9.8325Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CheckIcon;
