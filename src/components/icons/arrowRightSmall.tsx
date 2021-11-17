import React, { FC, SVGAttributes } from 'react';

const ArrowRightSmallIcon: FC<SVGAttributes<SVGSVGElement>> = ({
  className,
}) => {
  return (
    <svg
      className={className}
      width="20"
      height="16"
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18 6.5L19.4142 7.91421L12.7112 14.6173C12.3206 15.0078 11.6875 15.0078 11.297 14.6173C10.9064 14.2267 10.9064 13.5936 11.297 13.203L18 6.5Z"
        fill="currentColor"
      />
      <path
        d="M19.4102 7.91016L17.9959 9.32437L11.2929 2.62131C10.9024 2.23078 10.9024 1.59762 11.2929 1.20709C11.6834 0.816567 12.3166 0.816567 12.7071 1.20709L19.4102 7.91016Z"
        fill="currentColor"
      />
      <path
        d="M17 6.91406V8.91406L1 8.91406C0.447716 8.91406 0 8.46635 0 7.91406C0 7.36178 0.447716 6.91406 1 6.91406L17 6.91406Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowRightSmallIcon;
