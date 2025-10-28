"use client";

import React from "react";
import { Controller } from "react-hook-form";
import type { ICheckbox } from "../../../types";

const Checkbox: React.FC<ICheckbox> = ({
  name,
  control,
  label,
  rules = {},
  required,
  disabled = false,
  className = "",
  labelClassName = "",
  error,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      rules={{
        ...rules,
        validate: {
          ...(required
            ? {
                required: (value: boolean) => value || "This field is required",
              }
            : {}),
          ...rules?.validate,
        },
      }}
      render={({ field }) => {
        const { value, onChange } = field;

        const iconStyles: React.CSSProperties = {
          width: "16px",
          height: "16px",
          backgroundColor: value ? "#DB4444" : "#F7F7F8",
          borderRadius: "3px",
          border: `0.8px solid ${error ? "#f00" : "#DB4444"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          flexShrink: 0,
          boxShadow: "box-shadow: 0px 0.8px 1.6px 0px #23273014",
          transition: "all 0.2s ease",
          cursor: disabled ? "not-allowed" : "pointer",
        };

        const checkMarkStyle: React.CSSProperties = {
          width: "12px",
          height: "12px",
          backgroundImage: value
            ? "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512' fill='%23fff'%3E%3Cpath d='M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z' /%3E%3C/svg%3E\")"
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        };

        return (
          <div className={`flex items-center gap-2 ${className}`}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                cursor: disabled ? "not-allowed" : "pointer",
              }}
              className={
                "text-[12px] text-[#140E20] font-medium font-montserrat transition-all duration-300 " +
                labelClassName
              }
            >
              <input
                type="checkbox"
                checked={value}
                disabled={disabled}
                onChange={(e) => onChange(e.target.checked)}
                style={{ display: "none" }}
              />
              <div style={iconStyles}>
                <div style={checkMarkStyle}></div>
              </div>
              {label && (
                <span className="ml-2 text-[12px] text-[#140E20] font-medium font-montserrat">
                  {label}
                </span>
              )}
            </label>
          </div>
        );
      }}
    />
  );
};

export default Checkbox;
