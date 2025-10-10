import { useState } from "react";
import { Link } from "react-router-dom";
import type { IProductCard } from "../../../types";
import { EyeIcon, HeartIcon, StarIcon } from "../../icons";

const ProductCard: React.FC<IProductCard> = ({
  cover,
  oldPrice,
  price,
  reviewsNum,
  title,
  newItem,
  offer,
  colorsOption,
}) => {
  const [activeColor, setActiveColor] = useState<string>("red");

  return (
    <div className="flex flex-col gap-4 w-full md:w-[270px]">
      <div className="rounded-[4px] bg-[#F5F5F5] relative h-[250px] w-full group">
        {/* background image  */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img src={cover} alt="product image" />
        </div>
        {/* content on image  */}
        <div className="h-full w-full flex flex-col justify-between">
          <div className={`flex p-3 ${!offer && ! newItem ? "justify-end":"justify-between"}`}>
            {/* offer  */}
            {offer && (
              <div className="p-3 bg-[#DB4444] rounded-[4px] text-xs text-white h-[26px] flex items-center justify-center">
                -{offer}%
              </div>
            )}
            {/* new product  */}
            {newItem && (
              <div className="p-3 bg-[#00FF66] rounded-[4px] text-xs text-white h-[26px] flex items-center justify-center">
                NEW
              </div>
            )}

            <div className="flex flex-col gap-2">
              <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center cursor-pointer group/icon transition-all duration-300 hover:bg-black">
                <button className="cursor-pointer transition-all duration-300 group-hover/icon:text-white">
                  <HeartIcon />
                </button>
              </div>
              <div className="w-9 h-9 rounded-full bg-white flex justify-center items-center cursor-pointer group/icon transition-all duration-300 hover:bg-black">
                <Link
                  to={"#"}
                  className="transition-all duration-300 group-hover/icon:text-white"
                >
                  <EyeIcon />
                </Link>
              </div>
            </div>
          </div>
          <button className="font-medium text-white text-center w-full py-2 bg-black cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-[4px] rounded-bl-[4px]">
            {" "}
            Add To Cart
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h4 className="font-medium text-black">{title}</h4>

        {/* salary offer  */}
        <div className="flex items-center gap-2">
          <span className="text-[#DB4444] font-medium">${price}</span>
          {oldPrice && (
            <span className="text-black/50 line-through font-medium">
              ${oldPrice}
            </span>
          )}
        </div>

        {/* reviews  */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1 items-center">
            {[...Array(5)].map((_, index) => (
              <span key={index} className="text-xl text-[#FFAD33]">
                <StarIcon />
              </span>
            ))}
          </div>
          <span className="font-semibold text-sm text-black/50">
            ({reviewsNum})
          </span>
        </div>
        {/* colors options  */}
        {colorsOption && (
          <div className="flex items-center gap-2">
            <div
              className={`w-5 h-5 rounded-full bg-red-500 cursor-pointer duration-500 transition-all border border-transparent ${
                activeColor === "red" && " !border-black"
              }`}
              onClick={() => setActiveColor("red")}
            />
            <div
              className={`w-5 h-5 rounded-full bg-amber-500 cursor-pointer duration-500 transition-all border border-transparent ${
                activeColor === "orange" && "!border-black"
              }`}
              onClick={() => setActiveColor("orange")}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
