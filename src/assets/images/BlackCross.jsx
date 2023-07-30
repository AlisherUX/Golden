import * as React from "react";

const BlackCross = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#181818"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M16.667 3.333 3.334 16.667m13.333 0L3.334 3.333l13.333 13.334Z"
    />
  </svg>
)
export default BlackCross;