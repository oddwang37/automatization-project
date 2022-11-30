import * as React from "react";
import { SVGProps } from "react";
const SvgFirstLayer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.201 18.966v-.735h1.037c.43 0 .78-.351.78-.782V6.316a.783.783 0 0 0-.78-.783h-9.024a11.216 11.216 0 0 1-.069-.206C11.954 4.746 11.709 4 10.971 4h-6.01a.783.783 0 0 0-.781.783v1.054h-.718A.463.463 0 0 0 3 6.3V18.966c0 .255.207.463.462.463H19.74a.463.463 0 0 0 .462-.463ZM10.493 7.37l-.399-1.07c-.095-.24-.366-.447-.606-.447H4.85V4.799c0-.064.048-.128.128-.128h5.994c.341 0 .563.754.703 1.233.037.125.068.23.094.3h9.486c.063 0 .127.048.127.128v11.133a.126.126 0 0 1-.127.127H20.2V7.833a.463.463 0 0 0-.462-.463h-9.246Zm1.26 9.372V9.469h-1.445l-1.8 1.14v1.364l1.665-1.045h.043v5.814h1.538Z"
      fill="#5F98F5"
    />
  </svg>
);
export default SvgFirstLayer;
