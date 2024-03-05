const Vector = () => {
  return (
    <section className="w-[1076px] flex flex-row items-start justify-end pt-0 px-5 pb-[134px] box-border relative max-w-full text-center text-21xl text-black font-inter mq450:pb-[87px] mq450:box-border">
      <div className="flex flex-col items-center justify-start gap-[18px_0px] max-w-full">
        <div className="flex flex-col items-center justify-center relative">
          <h1 className="m-0 w-[944px] relative text-inherit leading-[51px] flex items-center font-inherit mq1050:text-13xl mq1050:leading-[41px] mq450:text-5xl mq450:leading-[31px]">
            <span className="w-full">
              <span className="font-medium">{`Your Trust, Our Commitment: Navigating `}</span>
              <span className="font-covered-by-your-grace text-orange">
                Retirement Investments
              </span>
              <span className="font-medium"> Together</span>
            </span>
          </h1>
          <img
            className="w-[36.4px] h-[35.2px] absolute !m-[0] bottom-[23.8px] left-[170px] object-contain z-[1]"
            alt=""
            src="/vector-4.svg"
          />
        </div>
        <div className="w-[698px] flex flex-row items-start justify-start max-w-full text-xl text-dimgray">
          <h1 className="m-0 w-[655px] relative text-inherit leading-[30px] font-normal font-inherit flex items-center justify-center shrink-0 max-w-full mq450:text-base mq450:leading-[24px]">
            Discover why we stand out among other retirement investment
            platforms. Our commitment to personalized strategies, transparent
            processes, and a track record of success sets us apart, ensuring you
            a superior and reliable path towards a secure and fulfilling
            retirement
          </h1>
        </div>
      </div>
      <img
        className="h-[61.7px] w-[63.2px] absolute !m-[0] right-[261.8px] bottom-[-18.7px] object-contain"
        alt=""
        src="/vector-5.svg"
      />
      <img
        className="h-[85.8px] w-[84.2px] absolute !m-[0] top-[-3px] left-[-51px] object-contain"
        alt=""
        src="/vector-89-1.svg"
      />
    </section>
  );
};

export default Vector;
