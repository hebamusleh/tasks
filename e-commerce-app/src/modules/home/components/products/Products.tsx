import { ProductCard, TitleHeading } from "../../../../components";
import { ourProducts } from "../../../../constant";

const Products = () => {
  return (
    <div className="border-b-[0.5px] border-black/30 pb-20 flex flex-col gap-[60px]">
      <div>
        <TitleHeading title="This Month" />
        <h2 className="font-semibold text-4xl">Explore Our Products</h2>
      </div>
      <div className="flex items-center flex-wrap gap-[30px]">
        {ourProducts.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
