const HomeImages = () => {
  return (
    <section className="mt:10 md:mt-[174px] px-4 w-full flex justify-center">
      <div className="relative w-full md:w-[464px] h-auto">
        <img
          width="464"
          height="526"
          src="/img/HomePicture.png"
          alt="HomePicture"
          className="block w-full h-auto object-cover rounded-[20px]"
        />

        {/* Purple question mark box */}
        <div className="w-10 h-10 bg-[#4535AF] rounded-[10px] absolute top-[38%] left-[-7%] -rotate-[15deg] flex items-center justify-center">
          <svg width="9" height="14.88" className="text-[#FBFBFB] fill-current">
            <use href="/sprite.svg#question-mark" />
          </svg>
        </div>

        {/* Yellow user-double box */}
        <div className="w-[48.17px] h-[48.17px] bg-[#FBC75E] rounded-[10px] absolute top-[48px] left-[455px] -rotate-[-15deg] flex items-center justify-center">
          <svg
            width="20"
            height="20"
            className="text-[#FBFBFB] fill-current rotate-[-15deg]"
          >
            <use href="/sprite.svg#user-double" />
          </svg>
        </div>

        {/* Tick info box */}
        <div className="flex justify-center items-center border bg-[#54BE96] w-[311px] h-[118px] rounded-[20px] border-transparent absolute top-[330px] left-[-100px]">
          <div className="flex gap-4 items-center">
            <div className="w-[54px] h-[54px] bg-[#FBFBFB] rounded-[10px] flex items-center justify-center">
              <svg
                width="20"
                height="15"
                className="text-[#54BE96] fill-current"
              >
                <use href="/sprite.svg#tick" />
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-[#FBFBFB]/50 text-sm">
                Experienced psychologists
              </p>
              <span className="text-[#FBFBFB] text-2xl font-bold">15,000</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeImages;
