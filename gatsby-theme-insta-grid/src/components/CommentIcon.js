import React from "react";

const CommentIcon = ({ width = "1rem", height = "1rem", fill = "black" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 49 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.8893 43H45.3498L42.9029 40.5531C41.5836 39.2338 40.7597 37.5178 40.5382 35.6563C46.1881 31.9485 49 26.5772 49 20.9461C49 10.5574 39.4518 0 24.4982 0C8.6565 0 0.1619 9.71475 0.1619 20.0359C0.1619 30.4251 8.7463 40.1333 24.4982 40.1333C27.2576 40.1333 30.137 39.765 32.7077 39.0891C35.1412 41.5851 38.4384 43 41.8893 43Z"
        fill={fill}
      />
    </svg>
  );
};

export default CommentIcon;
