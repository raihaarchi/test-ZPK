import { FC, SVGAttributes } from 'react';

const LoadingIcon: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="110"
      height="30"
      viewBox="0 0 110 30"
      fill="#fff">
      <circle cx="15" cy="15" r="15" fill="currentColor">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="1.2s"
          values="15;07;15;15;15;15;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="1.2s"
          values="1;.3;1;1;1;1;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="55" cy="15" r="15" fill="currentColor">
        <animate
          attributeName="r"
          from="9"
          to="9"
          begin="0s"
          dur="1.2s"
          values="15;15;07;15;15;15;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from=".5"
          to=".5"
          begin="0s"
          dur="1.2s"
          values="1;1;.3;1;1;1;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="95" cy="15" r="15" fill="currentColor">
        <animate
          attributeName="r"
          from="15"
          to="15"
          begin="0s"
          dur="1.2s"
          values="15;15;15;07;15;15;15"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="fill-opacity"
          from="1"
          to="1"
          begin="0s"
          dur="1.2s"
          values="1;1;1;.3;1;1;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
};

export default LoadingIcon;
