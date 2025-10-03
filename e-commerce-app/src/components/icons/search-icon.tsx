import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="m20 20-3.778-3.784m2.094-5.058a7.158 7.158 0 1 1-14.316 0 7.158 7.158 0 0 1 14.316 0z"
    />
  </svg>
);
const Memo = memo(SvgSearchIcon);
export default Memo;
