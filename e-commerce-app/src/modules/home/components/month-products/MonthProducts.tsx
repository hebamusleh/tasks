import { ProductCard, TitleHeading } from "../../../../components";
import { bestSellingProducts } from "../../../../constant";
import SubHeader from "./SubHeader";

const MonthProducts = () => {
  return (
    <div className="border-b-[0.5px] border-black/30 pb-20 flex flex-col gap-[60px]">
      <div>
        <TitleHeading title="This Month" />
        <SubHeader />
      </div>
      <div className="flex items-center justify-center gap-[30px]">
        {bestSellingProducts.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default MonthProducts;
