/* eslint-disable @typescript-eslint/no-unused-expressions */
"use client";

import { Controller } from "react-hook-form";
import { components } from "react-select";
import "./select-input.css";

import { useId, useState } from "react";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import type { ISelectInput } from "../../../types";
import ErrorMessage from "../error-message/ErrorMessage";

const SelectInput: React.FC<ISelectInput> = ({
  name,
  control,
  options,
  className = "",
  placeholder = "",
  label,
  required = false,
  rules,
  onChange,
  hasCustomOption = false,
  loadMore,
  isAsync = false,
  loadOptions,
  hideIcon = false,
  icon,
  menuPlacement = "bottom",
  ...props
}) => {
  const [isClient] = useState(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const CustomOption = (props: any) => {
    const { data } = props;
    return (
      <components.Option {...props}>
        <div className="flex items-center w-full gap-2 justify-between">
          {data.label}
          {props.isSelected && (
            <span className="text-[#4B3721] font-lato text-[16px]"></span>
          )}
        </div>
      </components.Option>
    );
  };

  return (
    <div
      className={`select-input__wrapper ${className ? className : ""}`.trim()}
    >
      {label ? (
        <label
          htmlFor={name}
          className={`select-input__label ${
            required ? "select-input__label--required" : ""
          }`.trim()}
        >
          {label}
        </label>
      ) : null}
      <Controller
        name={name}
        control={control}
        // defaultValue={de}
        rules={{
          ...rules,
          validate: {
            ...(required
              ? {
                  required: (value) => {
                    return value || "This field is required";
                  },
                }
              : {}),
            ...rules?.validate,
          },
        }}
        render={({ field, fieldState: { error } }) => (
          <div className="flex flex-col w-full">
            {isAsync ? (
              <AsyncSelect
                {...props}
                {...field}
                // eslint-disable-next-line react-hooks/rules-of-hooks
                instanceId={useId()}
                classNamePrefix={"select-input"}
                className={`select-input ${
                  hasCustomOption ? "select-input--has-custom-option" : ""
                } ${error ? "select-input--has-error mb-[3px]" : ""} ${
                  hideIcon ? "select-input-hide-icon" : ""
                } `.trim()}
                defaultOptions={options}
                // menuIsOpen={true}
                isClearable={props.isClearable === false ? false : true}
                placeholder={placeholder || label}
                id={name}
                onChange={(e) => {
                  field.onChange(e);
                  onChange && onChange(e);
                }}
                loadOptions={loadOptions}
                loadingMessage={() => "Searching..."}
                cacheOptions={true}
                onMenuScrollToBottom={() => {
                  loadMore && loadMore();
                }}
                menuPlacement={menuPlacement}
                components={{
                  Option: hasCustomOption ? CustomOption : components.Option,
                }} // Add custom option component here
                menuPortalTarget={isClient ? document.body : undefined}
              />
            ) : (
              <div className="relative">
                <Select
                  {...props}
                  {...field}
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  instanceId={useId()}
                  classNamePrefix={"select-input"}
                  className={`select-input ${
                    hasCustomOption ? "select-input--has-custom-option" : ""
                  } ${error ? "select-input--has-error mb-[3px]" : ""} ${
                    hideIcon ? "select-input-hide-icon" : ""
                  } `.trim()}
                  options={options}
                  // menuIsOpen={true}
                  isClearable={props.isClearable === false ? false : true}
                  placeholder={placeholder || label}
                  id={name}
                  onChange={(e) => {
                    field.onChange(e);
                    onChange && onChange(e);
                  }}
                  onMenuScrollToBottom={() => {
                    loadMore && loadMore();
                  }}
                  components={{
                    Option: hasCustomOption ? CustomOption : components.Option,
                  }} // Add custom option component here
                  menuPlacement={menuPlacement}
                  menuPortalTarget={isClient ? document.body : undefined}
                />
                {icon && (
                  <span className="absolute top-1/2 -translate-y-1/2 right-[28px] text-[#666666] text-[24px]">
                    {icon}
                  </span>
                )}
              </div>
            )}
            {error ? <ErrorMessage message={error.message!} /> : null}
          </div>
        )}
      />
    </div>
  );
};

export default SelectInput;
