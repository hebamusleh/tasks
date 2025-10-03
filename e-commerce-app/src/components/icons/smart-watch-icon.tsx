import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSmartWatchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeWidth={2}
      clipPath="url(#smart-watch-icon_svg__a)"
    >
      <path
        strokeLinejoin="round"
        d="M35 14H21a7 7 0 0 0-7 7v14a7 7 0 0 0 7 7h14a7 7 0 0 0 7-7V21a7 7 0 0 0-7-7M21 42v7h14v-7M21 14V7h14v7"
      />
      <path d="M24 23v11M28 28v6M32 26v8" />
    </g>
    <defs>
      <clipPath id="smart-watch-icon_svg__a">
        <path fill="#fff" d="M0 0h56v56H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgSmartWatchIcon);
export default Memo;
