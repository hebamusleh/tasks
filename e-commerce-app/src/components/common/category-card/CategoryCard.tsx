import React from "react";
import type { ICategoryCard } from "../../../types";

const CategoryCard: React.FC<ICategoryCard> = ({ icon, title }) => {
  return (
    <div className="border-[1px] border-black/30 rounded-[4px] h-[145px] w-full min-w-[170px] flex items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <span className="text-[56px] text-black">{icon}</span>
        <span className="text-black">{title}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
