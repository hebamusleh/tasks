import { Button, ProductCard, TitleHeading } from "../../../../components";
import { ourProducts } from "../../../../constant";

const Products = () => {
  return (
    <div className="border-b-[0.5px] border-black/30 pb-20 flex flex-col gap-[60px]">
      <div>
        <TitleHeading title="This Month" />
        <h2 className="title">Explore Our Products</h2>
      </div>
      <div className="flex items-center flex-wrap gap-[30px]">
        {ourProducts.map((item) => (
          <ProductCard {...item} key={item.id} />
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-20">
        <Button>View All Product</Button>
      </div>
    </div>
  );
};

export default Products;
