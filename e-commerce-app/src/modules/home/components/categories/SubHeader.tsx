import { VectorIocn } from "../../../../components";

const SubHeader = () => {
  return (
    <div className="flex flex-wrap justify-between gap-2 mt-2">
      <h2 className="title">Browse By Category</h2>
      <div className="flex items-center gap-2">
        <button className="custom-category-prev-button w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer">
          <span>
            <VectorIocn />
          </span>
        </button>
        <button className="custom-category-next-button w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer">
          <span>
            <VectorIocn className="rotate-180" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
