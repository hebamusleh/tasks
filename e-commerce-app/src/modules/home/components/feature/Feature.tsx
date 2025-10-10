import { TitleHeading } from "../../../../components";
import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div className="flex flex-col gap-[60px]">
      <div className="flex flex-col gap-2">
        <TitleHeading title="Featured" />
        <h2 className="font-semibold text-4xl">New Arrival</h2>
      </div>
      <div className="flex gap-[30px] flex-col md:flex-row">
        <div className="flex-1">
          <FeatureCard
            className="h-[286px] md:h-[600px]"
            title="PlayStation 5"
            description="Black and White version of the PS5 coming out on sale."
            image="/assets/images/big-headphone.png"
          />
        </div>
        <div className="flex-1 flex flex-col gap-[30px]">
          <div className="flex-1">
            <FeatureCard
              className="!h-[286px]"
              title="Women’s Collections"
              description="Featured woman collections that give you another vibe."
              image="/assets/images/woman.jpg"
            />
          </div>
          <div className="flex-1 flex gap-[30px] flex-col md:flex-row">
            <FeatureCard
              className="!h-[286px]"
              title="Speakers"
              description="Amazon wireless speakers"
              image="/assets/images/headphone-2.png"
            />
            <FeatureCard
              className="!h-[286px]"
              title="Perfume"
              description="GUCCI INTENSE OUD EDP"
              image="/assets/images/perfumes.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
