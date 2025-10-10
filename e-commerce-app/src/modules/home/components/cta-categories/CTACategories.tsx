import { Button } from "../../../../components";
import { data } from "../../../../constant/categories";
import type { ICircleTime } from "../../../../types";

const CircleTime: React.FC<ICircleTime> = ({ title, number }) => {
  return (
    <div className="w-[62px] h-[62px] bg-white rounded-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <span className="font-semibold">{number}</span>
        <span className="text-[11px] text-black leading-[18px] -mt-1.5">
          {title}
        </span>
      </div>
    </div>
  );
};

const CTACategories = () => {
  return (
    <div className="bg-black px-[56px]">
      <div className="w-full flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="flex-1 py-[70px] flex flex-col gap-10">
          <h4 className="font-semibold text-[#00FF66]">Categories</h4>
          <p className="text-5xl font-semibold text-white max-w-[443px]">
            Enhance Your Music Experience
          </p>
          <div className="flex items-center gap-6">
            {data.map((item) => (
              <CircleTime {...item} key={item.title} />
            ))}
          </div>
          <div>
            <Button className="!bg-[#00FF66]">Buy Now!</Button>
          </div>
        </div>
        <div className="flex-1 max-h-[330px] py-[70px]  md:py-0">
          <img
            src="/assets/images/music.png"
            alt="music"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CTACategories;
