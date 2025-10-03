import { Dropdown } from "../../common";

const TopHeader = () => {
  const handleSelect = (value: string) => {
    console.log("Selected:", value);
  };
  return (
    <div className="bg-black py-1">
      <div className="container flex justify-between items-center text-white flex-wrap">
        <span></span>
        <p className="text-sm text-[#FAFAFA] text-center">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <span className="underline font-semibold pl-2">ShopNow</span>
        </p>
        <Dropdown
          placeholder="Language"
          onSelect={handleSelect}
          options={["English", "Spanish", "French"]}
        />
      </div>
    </div>
  );
};

export default TopHeader;
