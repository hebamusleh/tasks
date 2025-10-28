import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  DeliveryIcon,
  HeartIcon,
  ReturnIcon,
  StarIcon,
} from "../../../../components";
import { useGetProductDetails } from "../../../../hooks";

const Details = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetProductDetails(Number(id));
  const [image, setImage] = useState<string>();

  useEffect(() => {
    if (data && data?.images.length > 0) {
      setImage(data.images[0]);
    }
  }, [data]);

  if (isLoading) {
    return <div>loading ...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center lg:flex-row gap-4 lg:gap-4 lg:h-[600px] mt-[100px]">
      <div className="basis-[100%] lg:basis-2/3  flex flex-col-reverse lg:flex-row gap-[30px]">
        <div className="flex flex-row flex-wrap lg:flex-col gap-[30px]">
          {data?.images?.map((item: string) => (
            <div
              className="bg-[#F5F5F5] w-[45%] lg:w-[170px] h-[138px] rounded-[4px] p-2 flex justify-center items-center cursor-pointer"
              key={item}
              onClick={() => setImage(item)}
            >
              <div className="w-[112px] h-[97px]">
                <img src={item} alt="product" className="w-full h-full" />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#F5F5F5] rounded-[4px] w-full lg:w-[500px] h-[300px] lg:h-[600px] flex justify-center items-center">
          <div className="w-[300px] h-[300px]">
            <img
              src={image}
              alt="product"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h3 className="text-black font-semibold text-2xl">{data?.title}</h3>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <span key={index} className="text-[16px] text-[#FFAD33]">
                    <StarIcon />
                  </span>
                ))}
              </div>
              <div className="text-black/50 text-sm">
                ({data?.reviews?.length} Reviews)
              </div>
            </div>
            <div className="text-sm text-black/50">
              |{" "}
              <span className="text-sm text-[#00FF66]/60">
                {data?.availabilityStatus}
              </span>
            </div>
          </div>
          <span className="text-black text-2xl">${data?.price}</span>
          <p className="text-black text-sm">{data?.description}</p>
        </div>
        <div className="bg-black/50 w-full m-0 p-0 h-[1px]"></div>
        <div className="flex flex-col gap-8">
          {/* sizes  */}
          <div className="flex items-center gap-6">
            <span>Sizes:</span>
            <div className="flex gap-4 items-center w-full">
              {["XS", "S", "M", "L", "XL"].map((item) => (
                <div
                  key={item}
                  className="w-8 h-8 rounded-[4px] border-[1px] border-black text-sm text-black flex justify-center items-center cursor-pointer duration-300 transition-all hover:bg-[#DB4444] hover:text-white hover:border-[#DB4444]"
                >
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          {/* cart  */}
          <div className="flex items-center gap-4">
            <div className="rounded-[4px] h-[40px] w-[40%] min-w-[159px] flex items-center justify-between">
              <span className="px-5 border-[1px] border-black hover:border-[#DB4444] h-[40px] rounded-bl-[4px] rounded-tl-[4px] cursor-pointer flex items-center justify-center duration-300 transition-all hover:bg-[#DB4444] hover:text-white">
                <span className="text-xl font-medium cursor-pointer">-</span>
              </span>
              <span className="border-t-[1px] w-full flex items-center justify-center border-b-[1px] border-black h-[40px]">
                <span>0</span>
              </span>
              <span className="px-5 border-[1px] border-black hover:border-[#DB4444] rounded-br-[4px] rounded-tr-[4px]  h-[40px] flex items-center justify-center cursor-pointer duration-300 transition-all hover:bg-[#DB4444] hover:text-white">
                <span className="text-xl font-medium cursor-pointer">+</span>
              </span>
            </div>
            <button className="w-[40%] cursor-pointer min-w-[165px] h-10 bg-[#DB4444] rounded-[4px] font-medium text-white flex items-center justify-center">
              <span>Buy Now</span>
            </button>
            <div className="rounded-[4px] border-[1px] border-black w-10 h-10 flex items-center justify-center">
              <span className="text-xl">
                <HeartIcon />
              </span>
            </div>
          </div>

          {/* delivery  */}
          <div className="rounded-[4px] border-[1px] border-black/50 flex flex-col">
            <div className="flex gap-4 items-center p-4 border-b-[1px] border-black/50">
              <span className="text-5xl text-black">
                <DeliveryIcon />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-black font-medium">Free Delivery</span>
                <span className="text-black underline text-xs">
                  Enter your postal code for Delivery Availability
                </span>
              </div>
            </div>
            <div className="flex gap-4 items-center p-4">
              <span className="text-5xl text-black">
                <ReturnIcon />
              </span>
              <div className="flex flex-col gap-2">
                <span className="text-black font-medium">Return Delivery</span>
                <span className="text-black text-xs">
                  Free 30 Days Delivery Returns.{" "}
                  <span className="underline cursor-pointer">Details</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
