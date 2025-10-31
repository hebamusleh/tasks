import { Link, useNavigate } from "react-router-dom";
import { PATHS } from "../../../enum";
import { Button } from "../../common";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="container px-7 py-5 bg-white">
      <div className="w-full flex items-center justify-between gap-3 flex-col md:flex-row ">
        <Link to={PATHS.HOME} className="text-4xl font-bold text-[#338573]">JobsPortal</Link>
        <div className="flex items-center gap-3">
          <Link to={PATHS.DASHBOARD} className="text-xl text-[#338573]">Dashboard</Link>
          <Button onClick={() => navigate(PATHS.POST)}>Post a job</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
