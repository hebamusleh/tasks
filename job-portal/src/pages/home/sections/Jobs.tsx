/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { JobCard, Pagination } from "../../../components";
import { useGetJobs } from "../../../hooks";

const Jobs = () => {
  const { data, isLoading } = useGetJobs();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;
  const count = data?.length;
  const totalPages = Math.ceil(count / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data?.slice(startIndex, endIndex);

  const handlePageChange = (e: { selectedPage: number }) =>
    setCurrentPage(e.selectedPage);
  return (
    <div className="container my-4 mb-16">
      <div className="flex items-center flex-col gap-4 justify-center">
        <h3 className="title">Featured jobs</h3>
        {isLoading ? (
          <>loading ....</>
        ) : (
          <>
            <div className="flex flex-col gap-3 w-full">
              {paginatedData?.map((item: any) => (
                <JobCard
                  key={item.id}
                  description={item?.description}
                  deadLine=""
                  length={item?.experience || "2"}
                  level=""
                  location={item.location}
                  qualification={item?.category}
                  requirement={item?.requirements || []}
                  responsibilities={[]}
                  salary={item.salary}
                  time={item.type || item.jobType}
                  title={item.title || item?.jobTitle}
                  id={item.id}
                />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              pageCount={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Jobs;
