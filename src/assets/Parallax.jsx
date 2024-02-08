import ImageSection from "./ImageSection";
import WelcomePage from "./WelcomePage";
import ConfigData from "../config.json";
const Img = ConfigData.Images[0];
const ImagesKitchen = Img.kitchen;
const Height = {
  1: "h-64",
  2: "h-64",
  3: "h-64",
  4: "h-64",
  5: "h-64",
  6: "h-64",
};
const Parallax = () => {
  return (
    <>
      <div className="content-container z-10">
        <div className="bg-sea1 parallax-image">
          <WelcomePage />
        </div>
        <div className="bg-white parallax-image">
          <ImageSection
            Images={ImagesKitchen}
            Title={"Still kitchen"}
            hight={Height}
          />
        </div>
        <div className="bg-sea3 parallax-image"></div>
      </div>
    </>
  );
};

export default Parallax;
