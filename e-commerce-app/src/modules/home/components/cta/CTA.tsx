import { CTACard } from "../../../../components";
import { ctaData } from "../../../../constant/categories";

const CTA = () => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-8 md:gap-[88px]  mb-14 md:mb-28">
      {ctaData.map((item) => (
        <CTACard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default CTA;
