import { RingLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="transform -translate-y-50">
        <RingLoader color="rgb(var(--primary-color))" size={150} />
      </div>
    </div>
  );
};

export default Loader;
