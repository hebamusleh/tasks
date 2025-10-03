import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgLinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.5 6.05c.917-.937 2.111-1.55 3.5-1.55a5.5 5.5 0 0 1 5.5 5.5v7.5h-2V10a3.5 3.5 0 1 0-7 0v7.5h-2V5h2zM1.5 3a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m-1 2h2v12.5h-2z"
    />
  </svg>
);
const Memo = memo(SvgLinkedinIcon);
export default Memo;
