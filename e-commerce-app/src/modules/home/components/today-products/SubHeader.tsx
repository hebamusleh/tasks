import { TimeCard, TwoDotIcon, VectorIocn } from "../../../../components";

const SubHeader = () => {
  return (
    <div className="flex justify-between mt-2">
      <div className="flex items-left md:items-end gap-4 md:gap-[87px] flex-col md:flex-row">
        <h2 className="font-semibold text-4xl">Flash Sales</h2>
        <div className="flex items-center gap-3 justify-center">
          <TimeCard title="Days" number={3} />
          <span className="pt-4">
            <TwoDotIcon color="#E07575" height={16} width={4} />
          </span>
          <TimeCard title="Hours" number={23} />
          <span className="pt-4">
            <TwoDotIcon color="#E07575" height={16} width={4} />
          </span>
          <TimeCard title="Minutes" number={19} />
          <span className="pt-4">
            <TwoDotIcon color="#E07575" height={16} width={4} />
          </span>
          <TimeCard title="Seconds" number={56} />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button className="custom-prev-button w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer">
          <span>
            <VectorIocn />
          </span>
        </button>
        <button className="custom-next-button w-[46px] h-[46px] rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer">
          <span>
            <VectorIocn className="rotate-180" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
