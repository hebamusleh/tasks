import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 13 8"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.364 4.95 11.314 0l1.414 1.414-6.364 6.364L0 1.414 1.414 0z"
    />
  </svg>
);
const Memo = memo(SvgArrowIcon);
export default Memo;
