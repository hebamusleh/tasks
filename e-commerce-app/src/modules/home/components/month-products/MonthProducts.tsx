import { ProductCard, TitleHeading } from "../../../../components";
import { useGetProduct } from "../../../../hooks";
import type { IProduct } from "../../../../models/products/product.model";
import SubHeader from "./SubHeader";

const MonthProducts = () => {
  const { data, isLoading } = useGetProduct({
    limit: 4,
    order: "asc",
  });
  return (
    <div className="border-b-[0.5px] border-black/30 pb-20 flex flex-col gap-[60px]">
      <div>
        <TitleHeading title="This Month" />
        <SubHeader />
      </div>
      <div className="flex items-center justify-center gap-[30px] flex-wrap">
        {isLoading ? (
          <div>loading...</div>
        ) : (
          data.map((item: IProduct) => (
            <ProductCard
              key={item.id}
              id={item.id}
              cover={item.thumbnail}
              price={item.price}
              reviewsNum={item.rating}
              title={item.title}
              oldPrice={item.discountPercentage * item.price}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default MonthProducts;
