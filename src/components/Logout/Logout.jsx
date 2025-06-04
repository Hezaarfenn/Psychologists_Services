import BaseModal from "../BaseModal/BaseModal";
import Lottie from "lottie-react";
import logoutAnimation from "../../assest/Animation - 1749030129537.json";

const Logout = ({ isOpen, onRequestClose, onConfirm }) => {
  return (
    <BaseModal isOpen={isOpen} onRequestClose={onRequestClose}>
      <div className="flex flex-col items-center">
        <Lottie
          animationData={logoutAnimation}
          loop
          autoplay
          className="w-60 h-60 mb-8"
        />
        <h2 className="text-2xl font-bold mb-4">
          Are you sure you want to get out?
        </h2>

        <div>
          <button
            className="bg-[rgb(var(--primary-color))] hover:bg-[rgb(var(--primary-color-hover))] cursor-pointer text-white px-4 py-2 rounded-md mr-2"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md cursor-pointer"
            onClick={onRequestClose}
          >
            No
          </button>
        </div>
      </div>
    </BaseModal>
  );
};

export default Logout;
