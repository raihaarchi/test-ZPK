import { FC, SVGAttributes } from 'react';

const UserIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="26"
      height="25"
      viewBox="0 0 26 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="13" cy="7" r="6" stroke="currentColor" strokeWidth="2" />
      <path
        d="M25 24c-2.769-4.252-7.117-7-12.005-7C8.107 17 3.769 19.748 1 24"
        stroke="currentColor"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default UserIcon;
