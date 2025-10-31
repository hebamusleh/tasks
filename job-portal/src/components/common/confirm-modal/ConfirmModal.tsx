import Button from "../button/Button";
import Modal from "../modal/Modal";

type Props = {
  onClose: () => void;
  show: boolean;
  message: string;
  title: string;
  primaryBtn?: string;
  handleClick?: () => void;
};

const ConfirmModal = ({
  show,
  onClose,
  title,
  message,
  primaryBtn,
  handleClick,
}: Props) => {
  return (
    <Modal handleClose={onClose} show={show} showCloseIcon={false}>
      <div className="flex flex-col gap-4 items-center justify-center">
        <h3 className="text-2xl font-bold leading-[100%] text-[#338573]">
          {title}
        </h3>
        <p className="text-[#338573] font-medium">{message}</p>
        {primaryBtn && (
          <div className="flex items-center justify-center gap-4">
            <Button className="!py-2" onClick={handleClick}>
              {primaryBtn}
            </Button>
            <Button variant="outline" className="!py-2" onClick={onClose}>
              Cancel
            </Button>
          </div>
        )}
      </div>
    </Modal>
  );
};

export default ConfirmModal;
