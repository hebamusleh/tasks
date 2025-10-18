import { Button, ProductCard, TitleHeading } from "../../../../components";
import { useGetProduct } from "../../../../hooks";
import type { IProduct } from "../../../../models/products/product.model";

const Products = () => {
  const { data, isLoading } = useGetProduct({
    limit: 12,
    order: "desc",
  });
  return (
    <div className="border-b-[0.5px] border-black/30 pb-20 flex flex-col gap-[60px]">
      <div>
        <TitleHeading title="This Month" />
        <h2 className="title">Explore Our Products</h2>
      </div>
      <div className="flex items-center flex-wrap gap-[30px]">
        {isLoading ? (
          <div>loading ...</div>
        ) : (
          data.map((item: IProduct) => (
            <ProductCard
              key={item.id}
              cover={item.thumbnail}
              id={item.id}
              price={item.price}
              title={item.title}
              reviewsNum={item.rating}
              newItem
            />
          ))
        )}
      </div>
      <div className="w-full flex items-center justify-center mt-20">
        <Button>View All Product</Button>
      </div>
    </div>
  );
};

export default Products;
