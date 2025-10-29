import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgSandboxIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.335 16V8c0-.35-.094-.695-.273-.999a2 2 0 0 0-.743-.731l-7.111-4a2.06 2.06 0 0 0-2.032 0l-7.112 4a2 2 0 0 0-.743.731A2 2 0 0 0 3.048 8v8c0 .35.094.695.273.999.178.303.434.556.743.731l7.112 4a2.06 2.06 0 0 0 2.031 0l7.112-4c.309-.175.565-.428.744-.731.178-.304.272-.648.272-.999"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7.62 4.21 4.572 2.6 4.571-2.6M7.62 19.79V14.6L3.048 12M21.335 12l-4.572 2.6v5.19M3.322 6.96l8.87 5.05 8.869-5.05M12.192 22.08V12"
    />
  </svg>
);
const Memo = memo(SvgSandboxIcon);
export default Memo;
