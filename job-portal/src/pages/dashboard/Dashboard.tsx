import { useState } from "react";
import {
  ConfirmModal,
  EditIcon,
  Table,
  TrashIcon,
  VeiwIcon,
} from "../../components";

const jobs = {
  docs: [
    {
      title: "ttt",
      type: "mm",
      date: "11/11/2022",
      deadline: "90",
    },
  ],
  totalPages: 2,
  count: 10,
};
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [modal, setModal] = useState<{
    open: boolean;
    title: string;
    message: string;
    primaryBtn?: string;
    handleClick?: () => void;
  }>({
    open: false,
    title: "",
    message: "",
  });

  const handlePageChange = (e: { selectedPage: number }) =>
    setCurrentPage(e.selectedPage);

  const handleDelete = () => {
    console.log("delete");
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
              cell: (item: any) => <div>{item?.date}</div>,
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
                  <span className="cursor-pointer">
                    <VeiwIcon color="#338573" width={20} height={20} />
                  </span>
                  <span className="cursor-pointer">
                    <EditIcon color="#04BCF6" width={20} height={20} />
                  </span>
                  <span
                    className="cursor-pointer"
                    onClick={() =>
                      setModal({
                        message: `Are you sure you want to delete ${item.title} job?`,
                        title: "Confirm Delete !",
                        open: true,
                        primaryBtn: "Delete",
                        handleClick() {
                          handleDelete();
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
            docs: jobs.docs,
            currentPage,
            totalPages: jobs.totalPages,
            limit: 10,
            count: jobs.count,
          }}
          isLoading={false}
          showPagination
          onPageChange={handlePageChange}
          clickUrl={""}
          text="No categories added yet"
        />
      </div>
      <ConfirmModal
        show={modal.open}
        onClose={() => setModal({ ...modal, open: false })}
        {...modal}
      />
    </div>
  );
};

export default Dashboard;
