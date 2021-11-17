import React, { FC, SVGAttributes } from 'react';

const ArrowRightIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="39"
      height="24"
      viewBox="0 0 39 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M37 10.5859L38.4142 12.0002L27.8078 22.6066C27.4172 22.9971 26.7841 22.9971 26.3935 22.6066C26.003 22.2161 26.003 21.5829 26.3935 21.1924L37 10.5859Z"
        fill="currentColor"
      />
      <path
        d="M38.4102 11.9961L36.9959 13.4103L26.3933 2.80762C26.0027 2.4171 26.0027 1.78393 26.3933 1.39341C26.7838 1.00288 27.4169 1.00288 27.8075 1.39341L38.4102 11.9961Z"
        fill="currentColor"
      />
      <path
        d="M36 11V13L1 13C0.447716 13 0 12.5523 0 12C0 11.4477 0.447716 11 1 11L36 11Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ArrowRightIcon;
