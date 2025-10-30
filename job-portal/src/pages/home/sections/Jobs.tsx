import { JobCard } from "../../../components";
import { jobs } from "../../../constant";

const Jobs = () => {
  return (
    <div className="container my-4 mb-16">
      <div className="flex items-center flex-col gap-4 justify-center">
        <h3 className="title">Featured jobs</h3>
        <div className="flex flex-col gap-3 w-full">
          {jobs.map((item) => (
            <JobCard key={item.id} {...item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
