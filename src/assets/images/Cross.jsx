import * as React from "react";

const Cross = (props) => (
  <svg
    width={20}
    height={22}
    viewBox="0 0 20 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={20} height={22} fill="white" />
    <path
      d="M14 7L6 15M14 15L6 7L14 15Z"
      stroke="#E44286"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default Cross;