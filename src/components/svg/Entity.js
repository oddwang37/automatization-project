import * as React from "react";
const SvgEntity = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.556 4H5.778C4.8 4 4 4.8 4 5.778v12.444C4 19.2 4.8 20 5.778 20h12.444C19.2 20 20 19.2 20 18.222V8.444L15.556 4Zm-8 3.556H12v1.777H7.556V7.556Zm8.888 8.888H7.556v-1.777h8.888v1.777Zm0-3.555H7.556V11.11h8.888v1.778Zm-1.777-3.556V5.778l3.555 3.555h-3.555Z"
      fill="#7890B2"
    />
  </svg>
);
export default SvgEntity;
