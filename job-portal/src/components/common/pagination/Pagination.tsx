/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import { SideArrowIcon } from "../../icons";

interface Props {
  currentPage: number;
  pageCount: number;
  onPageChange: (e: { selectedPage: number }) => void;
}
const Pagination: React.FC<Props> = ({
  pageCount,
  onPageChange,
  currentPage,
}) => {
  const [currentPageState, setCurrentPage] = useState(currentPage);
  const currentPageRef = useRef<boolean>(false);
  const handleChange = (e: any) => {
    onPageChange({ selectedPage: e.selected + 1 });
    setCurrentPage(e.selected + 1);
  };

  useEffect(() => {
    if (currentPageRef?.current) {
      if (currentPageState === pageCount || currentPageState === 1) {
        onPageChange({ selectedPage: currentPageState });
      }
    } else {
      currentPageRef.current = true;
    }
  }, [currentPageState]);

  useEffect(() => {
    setCurrentPage(currentPage);
  }, [currentPage]);

  return (
    <div className="flex items-center gap-[4px] mb-[24px]">
      <ReactPaginate
        nextLabel={<SideArrowIcon />}
        onPageChange={handleChange}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel={<SideArrowIcon />}
        pageClassName="pagination-item"
        pageLinkClassName="pagination-link"
        previousClassName="pagination-item pagination__prevItem"
        previousLinkClassName="pagination-link pagination__prevLink"
        nextClassName="pagination-item pagination__nextItem "
        nextLinkClassName="pagination-link pagination__nextLink"
        breakLabel="..."
        breakClassName="pagination-item"
        breakLinkClassName="pagination-link pagination__breakLine"
        containerClassName="pagination"
        activeClassName="active"
        forcePage={currentPageState - 1}
      />
    </div>
  );
};

export default Pagination