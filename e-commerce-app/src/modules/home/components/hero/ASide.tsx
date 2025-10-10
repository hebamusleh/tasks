import { ArrowIcon } from "../../../../components";

const navItems = [
  {
    title: "Woman’s Fashion",
    nested: ["test", "test"],
  },
  {
    title: "Men’s Fashion",
    nested: ["test", "test"],
  },
  {
    title: "Electronics",
  },
  {
    title: "Home & Lifestyle",
  },
  {
    title: "Medicine",
  },
  {
    title: "Sports & Outdoor",
  },
  {
    title: "Baby’s & Toys",
  },
  {
    title: "Groceries & Pets",
  },
  {
    title: "Health & Beauty",
  },
];
const ASide = () => {
  return (
    <div className="w-[217px] hidden md:block">
      <div className="pr-5 pt-10 flex flex-col gap-4">
        {navItems.map((item) => (
          <div className="flex justify-between w-full items-center">
            <span>{item.title}</span>
            {item?.nested && (
              <span>
                <ArrowIcon className="rotate-270 cursor-pointer" width={10} height={10} />
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ASide;
