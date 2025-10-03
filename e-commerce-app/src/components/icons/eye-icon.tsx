import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgEyeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 22 16"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.257 6.962c.474.62.474 1.457 0 2.076C18.764 10.987 15.182 15 11 15s-7.764-4.013-9.257-5.962a1.69 1.69 0 0 1 0-2.076C3.236 5.013 6.818 1 11 1s7.764 4.013 9.257 5.962"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
const Memo = memo(SvgEyeIcon);
export default Memo;
