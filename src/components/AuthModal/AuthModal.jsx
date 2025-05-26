import Modal from "react-modal";

Modal.setAppElement("#root");

const AuthModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="max-w-[566px] w-full bg-[#FBFBFB] p-16 rounded-[30px] mx-auto my-[145px] outline-none"
      overlayClassName="fixed inset-0 bg-[#191A15]/60"
    >
      {children}
    </Modal>
  );
};

export default AuthModal;
