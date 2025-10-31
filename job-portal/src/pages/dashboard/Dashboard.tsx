/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditIcon, Table, TrashIcon, VeiwIcon } from "../../components";
import { PATHS, QUERIES } from "../../enum";
import { useDeleteJob, useGetJobs } from "../../hooks";
import { useJobStore, useModalStore } from "../../store";
import { UnProcessableEntityError } from "../../types";

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { modal, setModal } = useModalStore();
  const { setJob } = useJobStore();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // fetch data :
  const { data, isLoading } = useGetJobs();
  const itemsPerPage = 10;
  const count = data?.length;
  const totalPages = Math.ceil(count / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data?.slice(startIndex, endIndex);

  // delete
  const { mutate, isPending } = useDeleteJob();

  const handlePageChange = (e: { selectedPage: number }) =>
    setCurrentPage(e.selectedPage);

  const handleDelete = (id: string) => {
    mutate(id, {
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: [QUERIES.JOBS],
        });
        setModal({
          open: true,
          title: "Delete Done Successfully",
          message: "Your job was delete successfully",
        });
      },
      onError: (e) => {
        if (e instanceof UnProcessableEntityError) {
          setModal({
            open: true,
            title: "Delete Failure",
            message: e.message,
          });
          return;
        }
        setModal({
          open: true,
          title: "Delete Failure",
          message: e.message || "Something went wrong , plz try again",
        });
      },
    });
  };

  return (
    <div>
      <div className="py-4 bg-[#F4F5F7]">
        <h3 className="title container text-center">My Jobs List</h3>
      </div>
      <div className="container">
        <Table
          columns={[
            {
              title: "Title",
              accessor: "title",
              width: "20%",
              minWidth: "150px",
              cell: (item: any) => <div>{item?.title}</div>,
            },
            {
              title: "Job Type",
              accessor: "type",
              width: "15%",
              minWidth: "150px",
              cell: (item: any) => <div>{item?.type}</div>,
            },
            {
              title: "Posted Date",
              accessor: "date",
              width: "15%",
              minWidth: "150px",
              cell: (item: any) => (
                <div>{new Date(item.createdAt).toLocaleDateString()}</div>
              ),
            },
            {
              title: "Application Deadline",
              accessor: "deadline",
              width: "20%",
              minWidth: "150px",
              cell: (item: any) => <div>{item?.deadline}</div>,
            },
            {
              title: "Action",
              accessor: "action",
              width: "20%",
              minWidth: "150px",
              cell: (item: any) => (
                <div className="flex items-center gap-2">
                  <span
                    className="cursor-pointer"
                    onClick={() => navigate(`/jobs/${item.id}`)}
                  >
                    <VeiwIcon color="#338573" width={20} height={20} />
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() => {
                      navigate(PATHS.POST);
                      setJob(item);
                    }}
                  >
                    <EditIcon color="#04BCF6" width={20} height={20} />
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() =>
                      setModal({
                        message: `Are you sure you want to delete ${item.title} job?`,
                        title: "Confirm Delete !",
                        open: true,
                        primaryBtn: isPending ? "Loading..." : "Delete",
                        handleClick() {
                          handleDelete(item.id);
                          setModal({ ...modal, open: false });
                        },
                      })
                    }
                  >
                    <TrashIcon color="#FA0606" width={20} height={20} />
                  </span>
                </div>
              ),
            },
          ]}
          data={{
            docs: paginatedData,
            currentPage,
            totalPages: totalPages,
            limit: 10,
            count: count,
          }}
          isLoading={isLoading}
          showPagination
          onPageChange={handlePageChange}
          clickUrl={""}
          text="No categories added yet"
        />
      </div>
    </div>
  );
};

export default Dashboard;
