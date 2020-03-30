import React from "react";

const HeartIcon = ({ width, height, fill = "black" }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 60 60"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M55.2402 8.50525C52.1342 5.13657 47.8725 3.28125 43.239 3.28125C39.7755 3.28125 36.6037 4.37622 33.8113 6.53549C32.4023 7.62543 31.1256 8.95889 30 10.5153C28.8748 8.95935 27.5977 7.62543 26.1882 6.53549C23.3963 4.37622 20.2245 3.28125 16.761 3.28125C12.1275 3.28125 7.8653 5.13657 4.75937 8.50525C1.69052 11.8346 0 16.3829 0 21.313C0 26.3873 1.89102 31.0323 5.95093 35.9312C9.58282 40.3134 14.8027 44.762 20.8475 49.9132C22.9115 51.6724 25.2512 53.6664 27.6805 55.7904C28.3223 56.3525 29.1458 56.662 30 56.662C30.8537 56.662 31.6777 56.3525 32.3186 55.7913C34.7479 53.6668 37.0889 51.6719 39.1539 49.9118C45.1978 44.7615 50.4176 40.3134 54.0495 35.9308C58.1094 31.0323 60 26.3873 60 21.3126C60 16.3829 58.3095 11.8346 55.2402 8.50525Z"
      fill={fill}
    />
  </svg>
);

export default HeartIcon;
