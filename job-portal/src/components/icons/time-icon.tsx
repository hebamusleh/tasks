import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgTimeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 21"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.645 14h2.646c.468 0 .916.184 1.247.513.33.328.517.773.517 1.237v2.625m0-15.75V5.25c0 .464-.186.91-.517 1.237A1.77 1.77 0 0 1 5.291 7H2.645zM18.518 7h-2.645a1.77 1.77 0 0 1-1.247-.513 1.74 1.74 0 0 1-.517-1.237V2.625zM14.11 18.375V15.75c0-.464.186-.91.517-1.237A1.77 1.77 0 0 1 15.873 14h2.645z"
    />
  </svg>
);
const Memo = memo(SvgTimeIcon);
export default Memo;
