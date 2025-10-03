import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems } from "../../../constant";
import { CartIcon, HeartIcon, SearchIcon } from "../../icons";

const BottomHeader = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="border-b-[.5px] border-black/30 mt-10 pb-7 ">
      <div className="container flex items-center justify-between flex-col md:flex-row gap-6 md:gap-0">
        <h1 className="text-2xl font-bold text-black">Exclusive</h1>
        <ul className="flex gap-12 items-center justify-between">
          {navItems.map((item) => (
            <li key={item.name} onClick={() => setActive(item.name)}>
              <Link
                to={item.link}
                className={`text-black py-2 transition duration-500 border-b-[1px] border-transparent ${
                  active === item.name ? "!border-black/50" : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-[10px] py-1.5 pl-5 pr-3 min-w-[243px] bg-[#F5F5F5] rounded-[4px]">
            <input
              type="text"
              className="text-xs outline-none border-none bg-transparent w-full placeholder:text-xs placeholder:text-black/50"
              placeholder="What are you looking for?"
            />
            <button className="cursor-pointer border-none outline-none bg-transparent">
              <SearchIcon className="w-6 h-6" />
            </button>
          </div>
          <div className="flex gap-4">
            <span>
              <HeartIcon className="w-6 h-6 cursor-pointer" />
            </span>
            <span>
              <CartIcon className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
