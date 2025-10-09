import React from "react";
import type { ICategoryCard } from "../../../types";

const CategoryCard: React.FC<ICategoryCard> = ({ icon, title }) => {
  return (
    <div className="border-[1px] border-black/30 rounded-[4px] h-[145px] w-full min-w-[170px] flex items-center justify-center bg-transparent hover:bg-[#DB4444] transition-all duration-500 group">
      <div className="flex flex-col gap-5 items-center justify-center text-black group-hover:text-white transition-all duration-300 ">
        <span className="text-[56px] ">{icon}</span>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default CategoryCard;
