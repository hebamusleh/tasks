import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgVectorIocn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 16"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 1 1 8l7 7M1 8h16"
    />
  </svg>
);
const Memo = memo(SvgVectorIocn);
export default Memo;
