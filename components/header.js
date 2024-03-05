const Header = () => {
  return (
    <header className="self-stretch bg-white shadow-[0px_4px_45px_1px_rgba(0,_0,_0,_0.14)] overflow-hidden flex flex-row items-end justify-between py-[22px] pr-[73px] pl-[72px] box-border top-[0] z-[99] sticky max-w-full gap-[20px] text-left text-base text-black font-inter mq750:pl-9 mq750:pr-9 mq750:box-border">
      <div className="w-[214px] flex flex-col items-start justify-start pt-0 px-0 pb-[3px] box-border">
        <img
          className="self-stretch h-[41px] relative max-w-full overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/logo-1.svg"
        />
      </div>
      <div className="flex flex-row items-center justify-start py-0 pr-px pl-0 box-border gap-[0px_41px] max-w-full mq750:gap-[0px_41px] mq1050:hidden">
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px] text-royalblue-200">
          <h1 className="m-0 relative text-inherit font-medium font-inherit">
            Home
          </h1>
        </div>
        <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[5px]">
          <h1 className="m-0 relative text-inherit font-normal font-inherit whitespace-nowrap">
            About Us
          </h1>
        </div>
        <div className="h-6 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
          <h1 className="m-0 relative text-inherit font-normal font-inherit">
            Investments
          </h1>
        </div>
        <div className="h-6 flex flex-col items-start justify-start py-0 pr-1.5 pl-0 box-border">
          <h1 className="m-0 relative text-inherit font-normal font-inherit whitespace-nowrap">
            Contact us
          </h1>
        </div>
        <button className="cursor-pointer [border:none] pt-[15px] pb-4 pr-6 pl-[30px] bg-royalblue-200 rounded-md flex flex-row items-center justify-end whitespace-nowrap hover:bg-dodgerblue">
          <div className="h-[50px] w-[111px] relative rounded-md bg-royalblue-200 hidden" />
          <div className="relative text-base font-semibold font-inter text-white text-left z-[1]">
            Sign In
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
