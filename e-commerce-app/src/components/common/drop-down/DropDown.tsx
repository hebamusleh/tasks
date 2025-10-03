import React, { useEffect, useRef, useState } from "react";
import { ArrowIcon } from "../../icons";

interface DropdownProps {
  options: string[];
  placeholder?: string | React.ReactNode;
  onSelect: (value: string) => void;
  className?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  placeholder = "Select...",
  onSelect,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setIsOpen(false);
  };

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative min-w-[100px] w-auto" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left flex gap-2 items-center focus:outline-none cursor-pointer  ${className}`}
      >
        <span>{selected || placeholder}</span>
        <span
          className={`text-[10px] transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ArrowIcon />
        </span>
      </button>

      {/* Dropdown panel with transition */}
      <ul
        className={`absolute z-10 mt-1 w-full bg-black/40 backdrop-blur-sm border-none rounded-[4px] shadow-lg max-h-60 overflow-auto transition-all duration-300 ease-in-out transform origin-top ${
          isOpen
            ? "opacity-100 scale-100"
            : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {options.map((option) => (
          <li
            key={option}
            onClick={() => handleSelect(option)}
            className="px-4 py-2 text-sm text-[#FAFAFA] cursor-pointer"
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
