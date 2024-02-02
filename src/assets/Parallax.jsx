import WelcomePage from "./WelcomePage";
const Parallax = () => {
  return (
    <>
      <div className="content-container z-10">
        <div className="bg-sea1 parallax-image">
          <WelcomePage />
        </div>
        <div className="bg-sea2 parallax-image"></div>
        <div className="bg-sea3 parallax-image"></div>
      </div>
    </>
  );
};

export default Parallax;
