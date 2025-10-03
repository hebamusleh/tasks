import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgCartIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 27a1 1 0 1 0 0-2 1 1 0 0 0 0 2M25 27a1 1 0 1 0 0-2 1 1 0 0 0 0 2M3 5h4l3 17h16"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 16.667h15.59a.5.5 0 0 0 .49-.402l1.8-9a.5.5 0 0 0-.49-.598H8"
    />
  </svg>
);
const Memo = memo(SvgCartIcon);
export default Memo;
