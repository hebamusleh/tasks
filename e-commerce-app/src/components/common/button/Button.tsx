type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
};

const Button = ({ children, onClick, className, type = "button" }: Props) => {
  return (
    <button
      className={`px-3 py-4 md:px-12 md:py-4 rounded-[4px] text-[#FAFAFA] bg-[#DB4444] font-medium text-center cursor-pointer ${className} transition-all duration-300 hover:opacity-90 `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
