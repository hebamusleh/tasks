import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="min-h-[90vh]">
      <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
