import BottomFooter from "./BottomFooter";
import TopFooter from "./TopFooter";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black mt-14 md:mt-28">
      <TopFooter />
      <BottomFooter />
    </footer>
  );
};

export default Footer;
