import { ProductCard, TitleHeading } from "../../../../components";
import { flashProducts } from "../../../../constant";

const Related = () => {
  return (
    <div className="flex flex-col gap-[60px] ">
      <TitleHeading title="Related Item" />
      <div className="flex gap-[30px] flex-wrap items-center justify-center">
        {flashProducts.slice(0, 4).map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Related;
