import { Link } from "react-router-dom";

const HomeInfo = () => {
  return (
    <section className="flex flex-col gap-10 w-full max-w-[595px] mt-[100px] md:mt-[222px] mb-[60px] md:mb-[140px] px-4">
      <div className="flex flex-col gap-5">
        <h1 className="w-[595px] text-[#191A15] text-[40px] md:text-[80px] font-semibold leading-tight md:leading-[82px]">
          The road to the{" "}
          <span className="text-[rgb(var(--primary-color))] italic">
            depths
          </span>{" "}
          of the human soul
        </h1>
        <h3 className="w-[510px] h-[72px] text-[#191A15] text-base md:text-lg font-medium">
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </h3>
      </div>
      <div className="">
        <Link to="/psychologists">
          <button className="relative bg-[rgb(var(--primary-color))] hover:bg-[rgb(var(--primary-color-hover))] cursor-pointer rounded-full text-[rgb(var(--primary-text-on))] text-base md:text-xl font-medium py-3 px-8 md:py-3.5 md:px-[50px] flex items-center gap-2">
            Get started
            <svg className="w-4 h-4" width="14" height="16">
              <use href="/sprite.svg#arrow" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeInfo;
