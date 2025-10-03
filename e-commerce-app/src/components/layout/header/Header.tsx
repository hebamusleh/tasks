import BottomHeader from "./BottomHeader";
import TopHeader from "./TopHeader";

const Header = () => {
  return (
    <header className="flex flex-col">
      <TopHeader />
      <BottomHeader />
    </header>
  );
};

export default Header;
