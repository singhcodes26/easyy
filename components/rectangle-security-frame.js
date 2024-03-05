const RectangleSecurityFrame = () => {
  return (
    <section className="w-[1368px] flex flex-row items-start justify-start pt-0 pb-[114px] pr-[46px] pl-5 box-border max-w-full text-left text-15xl text-white font-inter lg:pr-[23px] lg:box-border mq450:pb-[74px] mq450:box-border">
      <div className="h-[351px] flex-1 rounded-xl [background:linear-gradient(-84.35deg,_#3763ff,_#1c7cff_99.99%,_#355ef3)] shadow-[0px_4px_42px_1px_rgba(0,_0,_0,_0.16)] overflow-hidden flex flex-row items-start justify-start pt-[89px] px-0 pb-0 box-border relative gap-[0px_185px] max-w-full lg:gap-[0px_185px] mq750:gap-[0px_185px] mq1050:pt-[58px] mq1050:box-border mq450:gap-[0px_185px] mq450:pt-[38px] mq450:box-border">
        <img
          className="h-[593.6px] w-[763.5px] absolute !m-[0] right-[-48.2px] bottom-[-208.4px] object-contain"
          alt=""
          src="/frame-contact-us.svg"
        />
        <img
          className="ml-[-27px] mb-[-557px] h-[789px] w-[423px] relative max-w-[calc(100%_-_698px)] mq750:hidden"
          alt=""
          src="/ellipse-circle.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[21px_0px] max-w-[calc(100%_-_608px)] shrink-0 mq750:max-w-full">
          <h1 className="m-0 w-[513px] relative text-inherit leading-[50px] flex items-center z-[1] font-inherit mq1050:text-8xl mq1050:leading-[40px] mq450:text-xl mq450:leading-[30px]">
            <span className="w-full">
              <span className="font-semibold">{`From Savings to Security Your Journey to a Blissful `}</span>
              <span className="font-covered-by-your-grace text-orange">
                Retirement
              </span>
            </span>
          </h1>
          <div className="w-[265px] h-[50px] relative text-base text-black font-poppins">
            <div className="absolute h-full top-[0px] bottom-[0px] left-[0px] rounded-md bg-white shadow-[0px_4px_32px_1px_rgba(0,_0,_0,_0.14)] w-40 z-[1]" />
            <h1 className="m-0 absolute top-[13px] left-[35px] text-inherit font-semibold font-inherit inline-block w-[230px] z-[2]">
              Contact Us
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RectangleSecurityFrame;
