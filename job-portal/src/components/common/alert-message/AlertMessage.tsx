import { motion } from "framer-motion";
import type { IAlertMessage } from "../../../types";

const AlertMessage: React.FC<IAlertMessage> = ({ text, className, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
      className={`${
        type === "success"
          ? "text-green-500 border-green-500 bg-green-50"
          : "text-red-500 border-red-500 bg-red-50"
      } border-[1px] p-4 rounded-[15px] font-montserrat text-sm font-medium text-center ${
        className || ""
      }`}
    >
      {text}
    </motion.div>
  );
};

export default AlertMessage;
