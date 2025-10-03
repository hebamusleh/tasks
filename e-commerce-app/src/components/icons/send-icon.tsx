import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSendIcon = (props: SVGProps<SVGSVGElement>) => (
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
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.912 12H4L2.023 4.135A.7.7 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12 3.46 20.896c-.68.327-1.464-.16-1.46-.867a.7.7 0 0 1 .033-.186L3.5 15"
    />
  </svg>
);
const Memo = memo(SvgSendIcon);
export default Memo;
