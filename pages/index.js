import Header from "../components/header";
import FromSavingsToSecurityFrame from "../components/from-savings-to-security-frame";
import Text1 from "../components/text1";
import Vector from "../components/vector";
import FrameComponent from "../components/frame-component";
import RectangleSecurityFrame from "../components/rectangle-security-frame";
import EllipseShapeGroup from "../components/ellipse-shape-group";
import ContentImprovement from "../components/content-improvement";

const HeaderContainer = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-center justify-start tracking-[normal]">
      <Header />
      <FromSavingsToSecurityFrame />
      <Text1 />
      <Vector />
      <FrameComponent />
      <img
        className="w-[221px] h-px absolute !m-[0] right-[298px] bottom-[882px] z-[2]"
        alt=""
        src="/vector-arrow.svg"
      />
      <RectangleSecurityFrame />
      <EllipseShapeGroup />
      <div className="w-[576px] h-[576px] relative rounded-[50%] [background:linear-gradient(175.83deg,_#4b70f8,_#355ef3)] hidden max-w-full z-[8]" />
      <ContentImprovement />
    </div>
  );
};

export default HeaderContainer;
