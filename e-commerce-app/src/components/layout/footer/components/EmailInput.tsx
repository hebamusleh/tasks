import { SendIcon } from "../../../icons";

const EmailInput = () => {
  return (
    <form className="flex items-center py-3 pl-4 pr-3 border-[1.5px] border-white rounded-[4px]">
      <input type="text" className="w-full border-none outline-none placeholder:text-white/40" placeholder="Enter your email"/>
      <button className="text-2xl text-[#FAFAFA] cursor-pointer">
      <SendIcon />
      </button>
    </form>
  );
};

export default EmailInput;
