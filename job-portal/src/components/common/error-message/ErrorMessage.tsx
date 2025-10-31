import type { IErrorMessage } from "../../../types";

const ErrorMessage: React.FC<IErrorMessage> = ({ message, className }) => {
  return (
    <div
      className={`text-[#f00] font-medium font-montserrat text-xs md:text-sm mt-1 ${className}`}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;
