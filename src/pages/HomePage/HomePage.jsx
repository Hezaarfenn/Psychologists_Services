import HomeImages from "../../components/HomeImages/HomeImages";
import HomeInfo from "../../components/HomeInfo/HomeInfo";

const HomePage = () => {
  return (
    <section className="w-full flex justify-center px-4">
      <div className="max-w-[1440px] w-full flex flex-col md:flex-row gap-4 ml-32">
        <div className="flex-1/2">
          <HomeInfo />
        </div>
        <div className="flex-1/2">
          <HomeImages />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
