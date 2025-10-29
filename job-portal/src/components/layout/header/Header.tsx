import { Button } from "../../common";

const Header = () => {
  return (
    <div className="container px-7 py-5 bg-white">
      <div className="w-full flex items-center justify-between">
        <div className="text-4xl font-bold text-[#338573]">JobsPortal</div>
        <div className="flex items-center gap-3">
          <span className="text-xl text-[#338573]">Dashboard</span>
          <Button>Post a job</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
