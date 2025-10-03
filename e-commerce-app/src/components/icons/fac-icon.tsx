import * as React from "react";
import type { SVGProps } from "react";
import { memo } from "react";
const SvgFacIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 11 18"
    {...props}
  >
    <path
      fill="currentColor"
      d="M6 7h4.5L10 9H6v9H4V9H0V7h4V5.128c0-1.783.186-2.43.534-3.082A3.64 3.64 0 0 1 6.046.534C6.698.186 7.345 0 9.128 0q.784 0 1.372.15V2H9.128c-1.324 0-1.727.078-2.138.298-.304.162-.53.388-.692.692-.22.411-.298.814-.298 2.138z"
    />
  </svg>
);
const Memo = memo(SvgFacIcon);
export default Memo;
