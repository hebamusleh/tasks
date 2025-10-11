import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Controller } from "react-hook-form";
import type { IInput } from "../../../types";
import ErrorMessage from "../error-message/ErrorMessage";

const Input: React.FC<IInput> = ({
  name,
  control,
  label,
  placeholder,
  type = "string",
  rules = {},
  error,
  required,
  className,
  disabled = false,
  hasSuffix = false,
  isSecondary = false,
  labelClassName = "",
  customIcon,
  ...props
}) => {
  const [inputType] = useState(type);

  const suffix = hasSuffix ? (
    <div className="absolute start-0 top-[12.8px] ms-2 flex items-center text-[14px] text-colorText">
      {customIcon}
    </div>
  ) : null;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      disabled={disabled}
      rules={{
        ...rules,
        validate: {
          ...(required
            ? {
                required: (value: string | number) =>
                  (typeof value === "string"
                    ? value.trim() !== ""
                    : Boolean(value)) || "This field is required",
              }
            : {}),
          ...rules?.validate,
        },
      }}
      render={({ field }) => (
        <div className={`relative w-full ${className || ""}`}>
          {label && (
            <label
              htmlFor={name}
              className={`flex mb-3 text-[16px] font-bold text-[#3A3941] px-7 ${labelClassName} ${
                isSecondary ? "mb-2 font-medium" : ""
              } ${
                required
                  ? "after:content-['*'] after:text-colorPrimary after:ml-1"
                  : ""
              }`}
            >
              {label}
            </label>
          )}

          {inputType === "textarea" ? (
            <textarea
              id={name}
              placeholder={placeholder || ""}
              className={`block min-h-[97px] resize-none overflow-y-auto w-full  border-b-[1px] border-black/70 outline-none py-1 bg-transparent text-black  text-sm md:text-[16px] font-montserrat font-medium placeholder:text-[#3A3941]/60  placeholder:font-medium 
                transition-all duration-300
                ${isSecondary ? "h-[300px]" : ""}
                ${error ? "border-2 border-[#CF2B2B]" : ""}
                disabled:bg-white disabled:text-[#a9afbe]`}
              {...field}
            />
          ) : (
            <div className="relative w-full">
              <input
                type={inputType}
                id={name}
                disabled={disabled}
                placeholder={placeholder || ""}
                className={`w-full border-b-[1px] border-black/70 outline-none py-1 bg-transparent text-black text-sm md:text-[16px]  font-medium placeholder:text-black/40 placeholder:font-medium transition-all duration-300 ${
                  error ? "border-2 border-[#CF2B2B]" : ""
                }`}
                {...props}
                {...field}
              />
              {suffix &&
                (hasSuffix ? (
                  suffix
                ) : (
                  <div className="absolute top-1/2 -translate-y-1/2 end-4">
                    {suffix}
                  </div>
                ))}
            </div>
          )}

          {/* {error && (
            <div className="mt-1">
              <ErrorMessage message={error.message || error} />
            </div>
          )} */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                key="error-message"
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.25 }}
                className="mt-1"
              >
                <ErrorMessage message={error.message || error} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    />
  );
};

export default Input;
