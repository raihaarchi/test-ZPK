import { FC } from 'react';

const AboutServiceIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      className={className}
      width="451"
      height="256"
      viewBox="0 0 451 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 15V140C0 148.284 6.71573 155 15 155H99V190H143V155H227C235.284 155 242 148.284 242 140V15C242 6.71573 235.284 0 227 0H15C6.71573 0 0 6.71573 0 15Z"
        fill="white"
      />
      <path
        d="M159 190H137.5M73 190H94.5M137.5 190H116H94.5M137.5 190V157M94.5 190V157"
        stroke="black"
        strokeWidth="3"
      />
      <path d="M139 209H297.908L313 244H152.316L139 209Z" fill="white" />
      <path
        d="M320.875 243C319.475 243 306 209 306 209H337.5L355 243H320.875Z"
        fill="white"
      />
      <path d="M406.837 243L392 209H420.545L438 243H406.837Z" fill="white" />
      <path
        d="M133 220L145.306 254H351L333.419 220H148.823"
        stroke="black"
        strokeWidth="3"
      />
      <path
        d="M201 190H357.007C400.611 190 410.786 208.424 416.741 221.03H427.352C431.038 221.03 434.426 223.059 436.167 226.308L443.114 239.278C446.682 245.94 441.856 254 434.299 254H419.556C415.682 254 412.156 251.762 410.507 248.255L402.653 231.553C400.35 226.657 403.922 221.03 409.332 221.03V221.03"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  );
};

export default AboutServiceIcon;
