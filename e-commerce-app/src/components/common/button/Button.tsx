type Props = {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
};

const Button = ({ children, onClick, className }: Props) => {
  return (
    <button
      className={`px-12 py-4 rounded-[4px] text-[#FAFAFA] bg-[#DB4444] font-medium text-center ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
