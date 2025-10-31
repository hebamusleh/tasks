/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router-dom";
import { Button } from "../../components";
import { useGetJobDetails } from "../../hooks";

const JobDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetJobDetails(id!);
  const group1 = [
    {
      title: "Minimum Qualification",
      answer: data?.qualification || "Bachelor in Software Engineering",
    },
    {
      title: "Experience Level",
      answer: data?.experience || "over 2 years",
    },
    {
      title: "Location",
      answer: data?.location,
    },
    {
      title: "Salary Range",
      answer: data?.salary,
    },
  ];
  if (isLoading)
    return (
      <div className="min-h-screen items-center justify-center container">
        <div className="text-center">isLoading ...</div>
      </div>
    );
  return (
    <div>
      <div className="py-4 bg-[#F4F5F7]">
        <h3 className="title container text-center">
          {data?.title}
          <span className="md:text-xl ">({data?.type})</span>- Match{" "}
          {data?.company}
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
                <span className="md:text-xl font-medium text-black">
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
            <p className=" font-light">{data?.description}</p>
          </div>
          <hr className="bg-[#5f585896] border-none h-[1px]" />
          {/* group-3 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xl font-bold">Requirements:</h4>
            <ul className="list-disc">
              {data?.requirement?.length > 0 ? (
                data?.requirement.map((item: any, index: number) => (
                  <li className="font-light" key={index}>
                    {item}
                  </li>
                ))
              ) : (
                <div>Coming soon ... </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
