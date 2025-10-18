import { useParams } from "react-router-dom";
import { Details, Related } from "./components";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div className="container flex flex-col gap-28 mb-14 md:mb-28">
      <Details />
      <Related />
    </div>
  );
};

export default ProductDetails;
