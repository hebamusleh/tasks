import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgGamingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 56 56"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      clipPath="url(#gaming-icon_svg__a)"
    >
      <path
        strokeWidth={2}
        d="M46.667 14H9.333a4.667 4.667 0 0 0-4.666 4.667v18.666A4.667 4.667 0 0 0 9.333 42h37.334a4.667 4.667 0 0 0 4.666-4.667V18.667A4.667 4.667 0 0 0 46.667 14M14 28h9.333m-4.666-4.667v9.334"
      />
      <path strokeWidth={3} d="M35 25.667v.024M42 30.333v.024" />
    </g>
    <defs>
      <clipPath id="gaming-icon_svg__a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgGamingIcon);
export default Memo;
