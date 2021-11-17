import { FC, SVGAttributes } from 'react';

const TickRightIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="9"
      height="14"
      viewBox="0 0 9 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.7282 13.7108L8.17217 7.4279L8.16962 7.42541L8.17871 7.41654L1.73475 1.1336C1.33931 0.748052 0.698187 0.748052 0.302753 1.1336C-0.0926808 1.51916 -0.0926808 2.14426 0.302753 2.52981L5.31728 7.41903L0.296211 12.3146C-0.099223 12.7002 -0.0992231 13.3253 0.29621 13.7108C0.691644 14.0964 1.33277 14.0964 1.7282 13.7108Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default TickRightIcon;
