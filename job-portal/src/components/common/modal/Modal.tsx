import type { ReactNode } from "react";

interface Props {
  show: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  className?: string;
  title?: string;
  showCloseIcon?: boolean;
  nestedChildren?: ReactNode;
  showNestedModal?: boolean;
  handleCloseNestedModal?: () => void;
  text?: string;
}

const Modal: React.FC<Props> = ({
  show,
  handleClose,
  children,
  className = "",
  title,
  showCloseIcon = true,
  text,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 bottom-0 right-0 bg-transparent flex items-center gap-4 justify-center px-6 duration-500 pointer-events-none z-[9999999] ${
        show ? "!bg-black/20 backdrop-blur-[1px] !pointer-events-auto" : ""
      }`}
      onClick={() => {
        handleClose();
      }}
    >
      <div
        className={`overflow-y-auto opacity-0 translate-y-1 shadow-sm rounded-[10px] bg-white w-full  md:w-[757px] duration-500 w min-h-[200px] p-[24px] py-[28px] ${
          show ? "!opacity-100 !translate-y-0" : ""
        } ${className}`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {showCloseIcon && (
          <button
            onClick={() => {
              handleClose();
            }}
            className="border-none outline-none focus-within:outline-none absolute top-[12px] lg:top-[30px] text-colorPrimary text-[24px] z-10 rtl:left-[18px] lg:rtl:left-[30px] ltr:right-[18px] lg:ltr:right-[30px]"
            type="button"
          >
            x
          </button>
        )}

        {title ? (
          <div
            className={`relative ${
              text ? "" : "mb-[32px] "
            } flex justify-center `}
          >
            <p className="text-[20px] lg:text-[32px] font-bold text-text  max-w-[511px] text-center">
              {title}
            </p>
          </div>
        ) : null}

        {text ? (
          <p className="text-[16px] font-medium text-text max-w-[709px] text-center mb-[32px]">
            {text}
          </p>
        ) : null}

        {children}
      </div>
    </div>
  );
};

export default Modal;
