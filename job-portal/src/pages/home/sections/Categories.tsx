import { SandboxIcon } from "../../../components";

const CategoryCard = () => {
  return (
    <div className="bg-white w-[225px] h-[191px] flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="w-[75px] h-[75px] rounded-full bg-[#338573]/32 flex items-center justify-center">
          <span className="text-[#338573] text-3xl">
            <SandboxIcon />
          </span>
        </div>
        <span className="text-xl font-semibold text-center">Technology</span>
      </div>
    </div>
  );
};

const Categories = () => {
  return (
    <div className="bg-[#F6F7FA] py-7">
      <div className="container flex flex-col items-center gap-8">
        <h3 className="title">Popular Categories</h3>

        <div className="grid grid-cols-1 items-center justify-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7">
          {[...Array(10)].map((_, index) => (
            <CategoryCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
