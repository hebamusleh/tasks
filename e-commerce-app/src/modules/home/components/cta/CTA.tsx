import { CTACard } from "../../../../components";
import { ctaData } from "../../../../constant/categories";

const CTA = () => {
  return (
    <div className="flex items-center justify-center gap-8 md:gap-[88px]">
      {ctaData.map((item) => (
        <CTACard {...item} key={item.id} />
      ))}
    </div>
  );
};

export default CTA;
