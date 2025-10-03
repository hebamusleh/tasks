import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCustomerServiceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <g
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      clipPath="url(#customer-service-icon_svg__a)"
    >
      <path d="M13.333 25a3.333 3.333 0 0 0-6.666 0v3.333a3.333 3.333 0 0 0 6.666 0zM33.333 25a3.333 3.333 0 0 0-6.666 0v3.333a3.333 3.333 0 0 0 6.666 0z" />
      <path d="M6.667 25v-5a13.334 13.334 0 0 1 26.666 0v5M30 31.667c0 1.326-1.054 2.597-2.929 3.535S22.652 36.667 20 36.667" />
    </g>
    <defs>
      <clipPath id="customer-service-icon_svg__a">
        <path fill="currentColor" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(SvgCustomerServiceIcon);
export default Memo;
