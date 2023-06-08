import * as React from "react";

const Tick = (props) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={20} height={20} fill="white" />
    <path
      d="M6 10L9 13L14 7"
      stroke="#24C56E"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
export default Tick;