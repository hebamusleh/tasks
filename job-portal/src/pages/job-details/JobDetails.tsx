import { useParams } from "react-router-dom";
import { Button } from "../../components";
import { jobs } from "../../constant";

const JobDetails = () => {
  const { id } = useParams();
  const job = jobs.find((item) => item.id === id);
  const group1 = [
    {
      title: "Minimum Qualification",
      answer: job?.qualification,
    },
    {
      title: "Experience Level",
      answer: job?.level,
    },
    {
      title: "Experience Length",
      answer: job?.length,
    },
    {
      title: "Location",
      answer: job?.location,
    },
    {
      title: "Application Deadline",
      answer: job?.deadLine,
    },
    {
      title: "Salary Range",
      answer: job?.salary,
    },
  ];
  return (
    <div>
      <div className="py-4 bg-[#F4F5F7]">
        <h3 className="title container text-center">
          {job?.title}
          <span className="md:text-xl ">({job?.time})</span>- Match Company
          Limited
        </h3>
      </div>
      <div className="py-4 container mb-7">
        <div className="py-4 flex items-center justify-center gap-4">
          <Button>Apply This Job</Button>
          <Button variant="outline">View Company</Button>
        </div>
        <div className="flex flex-col gap-5">
          {/* group-1  */}
          <div className="flex flex-col gap-3">
            {group1.map((item) => (
              <div className="flex items-center gap-2">
                <span className="text-xl font-medium text-black">
                  {item.title}:
                </span>
                <span>{item.answer}</span>
              </div>
            ))}
          </div>
          <hr className="bg-[#5f585896] border-none h-[1px]" />
          {/* group-2  */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-bold">Job Description:</h4>
            <p className=" font-light">{job?.description}</p>
          </div>
          <hr className="bg-[#5f585896] border-none h-[1px]" />
          {/* group-3 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-bold">Requirements:</h4>
            <ul className="list-disc">
              {job?.requirement.map((item, index) => (
                <li className="font-light" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <hr className="bg-[#5f585896] border-none h-[1px]" />
          {/* group-4  */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-bold">Responsibilities:</h4>
            <ul className="list-disc">
              {job?.responsibilities.map((item, index) => (
                <li className="font-light" key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
