import { useMemo } from "react";

const FrameComponent1 = ({
  happyUsers,
  oinOurCommunityOfHappyUse,
  propAlignSelf,
  propGap,
  propWidth,
  propWidth1,
  propLeft,
}) => {
  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const frameDiv1Style = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const oinOurCommunityStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const groupIconStyle = useMemo(() => {
    return {
      width: propWidth1,
      left: propLeft,
    };
  }, [propWidth1, propLeft]);

  return (
    <div
      className="self-stretch rounded-xl bg-royalblue-200 shadow-[0px_4px_45px_1px_rgba(0,_0,_0,_0.16)] flex flex-row items-center justify-end pt-[27px] px-0 pb-[19px] box-border max-w-full z-[1] text-center text-5xl text-white font-inter mq750:pt-5 mq750:pb-5 mq750:box-border"
      style={frameDivStyle}
    >
      <div className="h-[512px] w-[400px] relative rounded-xl bg-royalblue-200 shadow-[0px_4px_45px_1px_rgba(0,_0,_0,_0.16)] hidden max-w-full" />
      <div
        className="flex-1 flex flex-col items-center justify-start pt-[210px] pb-[54px] pr-10 pl-[34px] box-border relative gap-[17px_0px] max-w-full mq750:pt-[136px] mq750:pb-[35px] mq750:box-border"
        style={frameDiv1Style}
      >
        <div className="flex flex-row items-start justify-start py-0 pr-[3px] pl-0">
          <h1 className="m-0 relative text-inherit leading-[35px] font-semibold font-inherit z-[2] mq450:text-lgi mq450:leading-[28px]">
            {happyUsers}
          </h1>
        </div>
        <h1
          className="m-0 w-[326px] relative text-xl leading-[30px] font-normal font-inherit flex items-center justify-center z-[2] mq450:text-base mq450:leading-[24px]"
          style={oinOurCommunityStyle}
        >
          {oinOurCommunityOfHappyUse}
        </h1>
        <img
          className="w-[calc(100%_-_22.3px)] h-[calc(100%_-_0.5px)] absolute !m-[0] top-[0px] right-[0.3px] bottom-[0.5px] left-[22px] max-w-full overflow-hidden max-h-full z-[3]"
          alt=""
          src="/group-5724.svg"
          style={groupIconStyle}
        />
      </div>
    </div>
  );
};

export default FrameComponent1;
