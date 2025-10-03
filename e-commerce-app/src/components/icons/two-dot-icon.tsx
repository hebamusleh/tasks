import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgTwoDotIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 4 16"
    {...props}
  >
    <circle cx={2} cy={2} r={2} fill="currentColor" />
    <circle cx={2} cy={14} r={2} fill="currentColor" />
  </svg>
);
const Memo = memo(SvgTwoDotIcon);
export default Memo;
