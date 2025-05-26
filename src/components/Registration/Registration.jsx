const Registiration = ({ onClose }) => {
  return (
    <section className="relative">
      <div className="flex flex-col gap-5">
        <h1 className="text-[40px] text-[#191A15] font-medium">
          Registiration
        </h1>
        <p className="text-[16px] text-[#191A15]/50 font-normal">
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information.
        </p>
      </div>
      <div className="flex flex-col mt-10 gap-4.5">
        <input
          type="text"
          placeholder="Name"
          className="w-[438px] h-[52px] border border-[#191A15]/10 rounded-xl px-4.5 placeholder:text-[#191A15]"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-[438px] h-[52px] border border-[#191A15]/10 rounded-xl px-4.5 placeholder:text-[#191A15]"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-[438px] h-[52px] border border-[#191A15]/10 rounded-xl px-4.5 placeholder:text-[#191A15]"
        />
        <button className="w-[438px] h-[52px] mt-10 border bg-[#54BE96] border-transparent hover:bg-[#36A379] rounded-[30px] text-[#FBFBFB]">
          Sign Up
        </button>
      </div>

      {/* X ikonu */}
      <div className="absolute top-[-40px] left-[444px]">
        <svg
          width="32"
          height="32"
          onClick={onClose}
          className="cursor-pointer"
        >
          <use href="/sprite.svg#x" />
        </svg>
      </div>
    </section>
  );
};

export default Registiration;
