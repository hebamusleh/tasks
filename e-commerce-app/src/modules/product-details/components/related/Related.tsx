import { useParams } from "react-router-dom";
import { ProductCard, TitleHeading } from "../../../../components";
import {
  useGetProductDetails,
  useGetProductsByCategories,
} from "../../../../hooks";
import type { IProduct } from "../../../../models/products/product.model";

const Related = () => {
  const { id } = useParams();
  const { data } = useGetProductDetails(Number(id));
  const { data: products, isLoading } = useGetProductsByCategories(
    data?.category
  );

  console.log(products);
  return (
    <div className="flex flex-col gap-[60px] ">
      <TitleHeading title="Related Item" />
      <div className="flex gap-[30px] flex-wrap items-center justify-center">
        {isLoading ? (
          <div>loading ... </div>
        ) : (
          products
            .slice(0, 4)
            .map((item: IProduct) => (
              <ProductCard
                cover={item.thumbnail}
                reviewsNum={item.rating}
                price={item.price}
                id={item.id}
                title={item.title}
                key={item.id}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default Related;
