import { useNavigate } from "react-router-dom";
import type { IJob } from "../../../types";
import { MapIcon, TimeIcon } from "../../icons";
import Button from "../button/Button";

const JobCard: React.FC<IJob> = ({
  title,
  location,
  level,
  salary,
  time,
  id,
}) => {
  const navigate = useNavigate();
  return (
    <div className="p-4 w-full box-shadow ">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-4">
          <div className="w-[91px] h-[91px] rounded-full bg-[#338573] flex items-center justify-center">
            <span className="text-[50px] font-bold text-white">J</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[#5F5858]">Match Company Limited</span>
            <span className="text-2xl font-semibold text-black">
              {title} ({level} Exp.)
            </span>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-[#338573] text-[15px]">
                  <MapIcon />
                </span>
                <span className="text-[15px]">{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#338573] text-[15px]">
                  <TimeIcon />
                </span>
                <span className="text-[15px]">{time}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[15px]">{salary}</span>
              </div>
            </div>
          </div>
        </div>
        <Button className="font-normal" onClick={() => navigate(`/jobs/${id}`)}>
          View Details
        </Button>
      </div>
    </div>
  );
};

export default JobCard;
