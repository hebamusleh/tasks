import { Outlet } from "react-router-dom";
import { useModalStore } from "../../store";
import { ConfirmModal } from "../common";
import Footer from "./footer/Footer";
import Header from "./header/Header";

export const Layout = () => {
  const { modal, setModal } = useModalStore();
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <ConfirmModal
        onClose={() => setModal({ ...modal, open: false })}
        show={modal.open}
        {...modal}
      />
    </>
  );
};
