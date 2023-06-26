import * as React from "react";

const GrayLike = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#454F5B"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.834 2.5c-2.301 0-4.167 1.847-4.167 4.125 0 1.84.73 6.204 7.907 10.617a.821.821 0 0 0 .853 0c7.178-4.413 7.907-8.778 7.907-10.617 0-2.278-1.866-4.125-4.167-4.125C11.867 2.5 10 5 10 5S8.134 2.5 5.834 2.5Z"
    />
  </svg>
);
export default GrayLike;