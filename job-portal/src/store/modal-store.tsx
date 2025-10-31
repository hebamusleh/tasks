import { create } from "zustand";

interface IModal {
  open: boolean;
  title: string;
  message: string;
  primaryBtn?: string;
  handleClick?: () => void;
}

interface IModalStore {
  modal: IModal;
  setModal: (modal: Partial<IModal>) => void;
  resetModal: () => void;
}

export const useModalStore = create<IModalStore>((set) => ({
  modal: {
    open: false,
    title: "",
    message: "",
  },
  setModal: (modal) =>
    set((state) => ({
      modal: { ...state.modal, ...modal },
    })),
  resetModal: () =>
    set({
      modal: {
        open: false,
        title: "",
        message: "",
      },
    }),
}));
