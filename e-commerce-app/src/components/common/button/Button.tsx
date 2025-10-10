type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
};

const Button = ({ children, onClick, className, type = "button" }: Props) => {
  return (
    <button
      className={`px-12 py-4 rounded-[4px] text-[#FAFAFA] bg-[#DB4444] font-medium text-center ${className} `}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
