import Modal from "react-modal";

Modal.setAppElement("#root");

const AuthModal = ({ isOpen, onRequestClose, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="w-full h-full md:max-w-[566px] md:h-auto bg-[#FBFBFB] p-6 md:p-16 md:rounded-[30px] outline-none overflow-auto"
      overlayClassName="fixed inset-0 bg-[#191A15]/60 z-50 flex justify-center items-center"
    >
      {children}
    </Modal>
  );
};

export default AuthModal;
