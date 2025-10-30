import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgMapIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 21 20"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#map-icon_svg__a)"
    >
      <path d="M17.637 8.333c0 5.834-7.559 10.834-7.559 10.834s-7.558-5-7.558-10.834A7.47 7.47 0 0 1 4.733 3.03 7.6 7.6 0 0 1 10.078.833c2.005 0 3.927.79 5.345 2.197a7.47 7.47 0 0 1 2.214 5.303" />
      <path d="M10.078 10.833a2.51 2.51 0 0 0 2.52-2.5 2.51 2.51 0 0 0-2.52-2.5 2.51 2.51 0 0 0-2.52 2.5 2.51 2.51 0 0 0 2.52 2.5" />
    </g>
    <defs>
      <clipPath id="map-icon_svg__a">
        <path fill="#fff" d="M0 0h20.156v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgMapIcon);
export default Memo;
