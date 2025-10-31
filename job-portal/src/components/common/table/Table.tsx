/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import type { Page } from "../../../types";
import Pagination from "../pagination/Pagination";

interface Props {
  data: Page<any>;
  columns: any[];
  isLoading: boolean;
  wrapperClassName?: string;
  showPagination?: boolean;
  clickUrl?: string;
  stateData?: (item: any) => Record<string, any>;
  text?: string;
  customStyle?: string;
  customHeaderStyle?: string;
  noPagination?: boolean;
}

interface TableWithPagination extends Props {
  showPagination: true;
  onPageChange: (e: { selectedPage: number }) => void;
}

interface TableWithoutPagination extends Props {
  showPagination: false;
  onPageChange?: never;
}

const Table: React.FC<TableWithPagination | TableWithoutPagination> = ({
  columns,
  data,
  isLoading,
  onPageChange,
  wrapperClassName,
  showPagination,
  clickUrl,
  stateData,
  text,
  noPagination = false,
}) => {
  return (
    <div
      className={wrapperClassName}
      style={{
        overflowX: "auto",
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          minWidth: "100%",
          backgroundColor: "rgba(255,255,255,0.5)",
          borderBottomLeftRadius: "16px",
          borderBottomRightRadius: "16px",
          paddingBottom: "32px",
          paddingInline: "32px",
          marginBottom: "30px",
          minHeight: "400px",
          display: "table",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            paddingInline: "8px",
            height: "48px",
            display: "flex",
            gap: "16px",
            fontSize: "16px",
            alignItems: "center",
            width: "100%",
            marginBottom: "8px",
            borderBottom: "1px solid #E5E7EB",
          }}
        >
          {columns.map((item, index) => (
            <div
              key={index}
              style={{
                color: "#6B7280",
                fontWeight: 400,
                textTransform: "uppercase",
                fontSize: "16px",
                ...(item.minWidth ? { minWidth: item.minWidth } : {}),
                ...(item.width ? { width: item.width } : { flexGrow: 1 }),
              }}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* BODY */}
        {isLoading ? (
          <div
            style={{
              width: "100%",
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            loading ...
          </div>
        ) : data?.docs?.length ? (
          data.docs.map((item, rowIndex) => {
            const rowStyle = {
              paddingBlock: "17px",
              paddingInline: "8px",
              gap: "16px",
              display: "flex",
              alignItems: "center",
              width: "100%",
              minHeight: "65px",
              borderBottom: "1px solid #E5E7EB",
              backgroundColor: rowIndex % 2 === 0 ? "#FAFAFC" : "transparent",
              cursor: clickUrl ? "pointer" : "default",
              transition: "background-color 0.3s",
            };

            const content = columns.map((col, colIndex) => (
              <div
                key={colIndex}
                style={{
                  fontSize: "16px",
                  color: "#111827",
                  flexShrink: 0,
                  ...(col.width ? { width: col.width } : { flexGrow: 1 }),
                }}
              >
                {col.cell ? col.cell(item, rowIndex) : item[col.accessor]}
              </div>
            ));

            return clickUrl ? (
              <Link
                key={rowIndex}
                to={`${clickUrl}/${item.id}`}
                state={stateData ? stateData(item) : undefined}
                style={rowStyle}
              >
                {content}
              </Link>
            ) : (
              <div key={rowIndex} style={rowStyle}>
                {content}
              </div>
            );
          })
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: "350px",
            }}
          >
            <img
              src="/dashboard/assets/images/no-data.svg"
              alt=""
              style={{
                width: "214px",
                height: "214px",
                marginBottom: "24px",
              }}
            />
            <h5
              style={{
                color: "#6B7280",
                fontSize: "14px",
                fontWeight: 400,
              }}
            >
              {text || "There's no data to display"}
            </h5>
          </div>
        )}
      </div>

      {/* PAGINATION */}
      {showPagination ? (
        !isLoading && data?.docs?.length ? (
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "16px" }}>
            <Pagination
              currentPage={data?.currentPage || 1}
              onPageChange={onPageChange}
              pageCount={data?.totalPages!}
            />
          </div>
        ) : null
      ) : noPagination ? null : (
        !isLoading &&
        data?.docs?.length && (
          <div style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "20px" }}>
            <span style={{ color: "#6B7280" }}>{data?.limit} results</span>
            <span style={{ color: "#111827" }}> out of {data?.totalPages}</span>
          </div>
        )
      )}
    </div>
  );
};

export default Table;
