import * as React from "react";
import { SVGProps } from "react";
const SvgProject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={22}
    height={22}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#project_svg__a)">
      <path
        d="M2.75 11.917h7.333V2.75H2.75v9.167Zm0 7.333h7.333v-5.5H2.75v5.5Zm9.167 0h7.333v-9.167h-7.333v9.167Zm0-16.5v5.5h7.333v-5.5h-7.333Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="project_svg__a">
        <path fill="#fff" d="M0 0h22v22H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgProject;
