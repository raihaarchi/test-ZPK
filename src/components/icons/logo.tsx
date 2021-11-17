import { FC, SVGAttributes } from 'react';

const Logo: FC<SVGAttributes<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      className={className}
      width="255"
      height="58"
      viewBox="0 0 255 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M9.23828 35.0305H14.2587C14.3903 36.508 15.0692 37.8704 16.1471 38.8202C17.225 39.77 18.6143 40.23 20.0116 40.0998C23.2314 40.0998 25.032 38.4853 25.032 35.6763C25.032 33.1901 23.2772 31.7694 20.0574 31.7694H16.8986V27.3136H19.7522C22.4226 27.3136 24.3301 26.0383 24.3301 23.7135C24.3301 21.1143 22.3921 19.8389 19.859 19.8389C18.5061 19.7549 17.1768 20.241 16.1617 21.191C15.1466 22.1409 14.5282 23.4773 14.4418 24.9082H9.4977C10.0165 19.4031 14.0756 15.4478 20.3321 15.4478C25.9324 15.4478 29.671 18.273 29.7015 23.0355C29.6902 24.3212 29.3287 25.5763 28.6601 26.6501C27.9916 27.7239 27.0445 28.5709 25.9324 29.0895C27.2898 29.5026 28.4698 30.4011 29.2712 31.6316C30.0726 32.8621 30.4457 34.3486 30.3271 35.8377C30.3271 41.924 25.3525 44.5232 19.92 44.5232C13.3126 44.4748 9.86393 40.6487 9.23828 35.0305Z"
        fill="currentColor"
      />
      <path
        d="M46.9653 15.8831L56.8841 43.9738H51.2228L49.3611 38.2749H39.0151L37.1534 43.9738H31.8125L41.7008 15.8831H46.9653ZM47.8504 33.7707L44.1881 22.6797L40.5258 33.7707H47.8504Z"
        fill="currentColor"
      />
      <path
        d="M74.9844 15.8831H96.8362V43.9738H91.6021V20.3873H80.249V43.9738H74.9844V15.8831Z"
        fill="currentColor"
      />
      <path
        d="M101.348 29.9108C101.348 21.193 106.444 15.3811 114.349 15.3811C122.253 15.3811 127.35 21.193 127.35 29.9108C127.35 38.6286 122.253 44.4405 114.349 44.4405C106.444 44.4405 101.348 38.6124 101.348 29.9108ZM121.933 29.9108C121.933 23.324 118.484 19.8046 114.303 19.8046C110.122 19.8046 106.673 23.324 106.673 29.9108C106.673 36.4976 110.122 40.0654 114.303 40.0654C118.484 40.0654 121.918 36.4976 121.918 29.9108H121.933Z"
        fill="currentColor"
      />
      <path
        d="M131.855 15.8831H137.09V29.4118L146.642 15.8831H152.502L142.644 29.2826L152.899 43.9737H146.795L137.059 30.0576V43.9737H131.855V15.8831Z"
        fill="currentColor"
      />
      <path
        d="M157.049 39.9862H159.765C160.341 40.0712 160.928 39.9721 161.45 39.7017C161.972 39.4313 162.405 39.0018 162.695 38.4686L163.092 37.8067L153.387 15.8831H159.094L165.701 32.1563L171.668 16.0122H177.421L168.036 38.6139C166.51 42.1818 164.587 44.4742 160.162 44.4742H157.11L157.049 39.9862Z"
        fill="currentColor"
      />
      <path
        d="M180.305 15.8831H202.172V43.9737H196.938V20.3873H185.539V43.9737H180.305V15.8831Z"
        fill="currentColor"
      />
      <path
        d="M208.167 15.8831H213.401V29.4118L222.954 15.8831H228.814L218.956 29.2826L229.21 43.9738H223.106L213.371 30.0576V43.9738H208.137L208.167 15.8831Z"
        fill="currentColor"
      />
      <path
        d="M232.628 15.8831H237.572V36.3376L250.054 15.8831H254.999V43.9737H250.054V23.5192L237.572 43.9737H232.628V15.8831Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.5197 11.079C4.29505 17.1418 2 25.4044 2 32.2702C2 39.5765 5.46486 45.3642 11.1433 49.3602C16.8482 53.3748 24.8039 55.5832 33.6862 55.5832C42.5458 55.5832 50.5066 53.1315 56.2254 48.9869C61.932 44.851 65.3876 39.0532 65.3876 32.2702C65.3876 26.0672 62.9924 19.5272 57.058 15.041C51.1145 10.548 41.459 7.99336 26.7029 10.1254L26.4169 8.146C41.4935 5.96761 51.7518 8.52257 58.2641 13.4456C64.7854 18.3755 67.3876 25.5579 67.3876 32.2702C67.3876 39.807 63.5262 46.1656 57.399 50.6063C51.2839 55.0382 42.894 57.5832 33.6862 57.5832C24.5011 57.5832 16.1137 55.3035 9.99231 50.9958C3.84452 46.6695 0 40.3007 0 32.2702C0 25.0099 2.42019 16.176 9.12426 9.64631C15.8566 3.0891 26.7557 -0.996654 43.4021 0.974693L43.1669 2.96081C26.9593 1.04144 16.7161 5.04387 10.5197 11.079Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
