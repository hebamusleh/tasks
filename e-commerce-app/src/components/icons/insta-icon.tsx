import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgInstaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15 1H5a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4Z"
    />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <path fill="currentColor" d="M15.5 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
const Memo = memo(SvgInstaIcon);
export default Memo;
