import React from "react";
import type { ICTACard } from "../../../types";

const CTACard: React.FC<ICTACard> = ({ icon, title, subTitle }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div className="bg-[#363738]/30 w-20 h-20 rounded-full flex items-center justify-center">
        <div className="bg-black w-11 h-11 rounded-full flex items-center justify-center">
          <span className="text-4xl text-white">{icon}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-center">
        <div className="text-xl text-black font-semibold uppercase text-center">
          {title}
        </div>
        <div className="text-sm text-black text-center">{subTitle}</div>
      </div>
    </div>
  );
};

export default CTACard;
