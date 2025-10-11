type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  variant?: "primary" | "outline";
};

const Button = ({
  children,
  onClick,
  className,
  type = "button",
  variant = "primary",
}: Props) => {
  const variants = {
    primary: "text-[#FAFAFA] bg-[#DB4444] ",
    outline: "bg-white border-[1px] border-black text-black",
  };
  return (
    <button
      className={`px-3 py-4 md:px-12 md:py-4 rounded-[4px] ${variants[variant]} font-medium text-center cursor-pointer ${className} transition-all duration-300 hover:opacity-90 `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
