import React from "react";
import type { ITitleHeading } from "../../../types";

const TitleHeading: React.FC<ITitleHeading> = ({ title }) => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-[40px] w-[20px] rounded-[4px] bg-[#DB4444]" />
      <span className="text-[#DB4444] font-semibold">{title}</span>
    </div>
  );
};

export default TitleHeading;
