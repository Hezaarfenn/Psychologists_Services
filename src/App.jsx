import { AppRoutes } from "./routers/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ThemeWrapper from "./components/ThemeWrapper/ThemeWrapper";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";

function App() {
  return (
    <ThemeWrapper>
      <div className="hidden md:flex flex-col max-w-[1440px] min-w-[760px] mx-auto px-4 sm:px-6 lg:px-8">
        <ThemeSelector />
      </div>
      <AppRoutes />

      <ToastContainer position="top-right" autoClose={1000} />
    </ThemeWrapper>
  );
}

export default App;
