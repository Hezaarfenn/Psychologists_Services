import { RingLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <RingLoader color="[rgb(var(--primary-color))]" size={150} />;
    </div>
  );
};

export default Loader;
