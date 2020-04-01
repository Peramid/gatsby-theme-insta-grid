import React from "react";

const CommentIcon = ({ width, height, fill = "black" }) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.11067 43H3.65022L6.09711 40.5531C7.41645 39.2338 8.24033 37.5178 8.46183 35.6563C2.81191 31.9485 0 26.5772 0 20.9461C0 10.5574 9.5482 0 24.5018 0C40.3435 0 48.8381 9.71475 48.8381 20.0359C48.8381 30.4251 40.2537 40.1333 24.5018 40.1333C21.7424 40.1333 18.863 39.765 16.2923 39.0891C13.8588 41.5851 10.5616 43 7.11067 43V43Z"
        fill={fill}
      />
    </svg>
  );
};

export default CommentIcon;
