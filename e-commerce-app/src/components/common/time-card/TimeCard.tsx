const TimeCard: React.FC<{
  title: string;
  number: number;
}> = ({ title, number }) => {
  return (
    <div className="flex flex-col text-black">
      <span className="text-xs font-medium leading-[18px] capitalize">
        {title}
      </span>
      <span className="text-[32px] font-bold leading-8">{number}</span>
    </div>
  );
};

export default TimeCard;
