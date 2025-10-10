import { Button } from "../../../../components";

const SubHeader = () => {
  return (
    <div className="flex justify-between items-center ">
      <h2 className="font-semibold text-4xl">Best Selling Products</h2>
      <Button>View All</Button>
    </div>
  );
};

export default SubHeader;
