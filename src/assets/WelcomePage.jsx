import { Link } from "react-router-dom";
import ConfigData from "../config.json";
import Founder from "../assets/Images/founder.webp";

const WelcomePage = () => {
  const { info } = ConfigData;
  // const Founder =
  //   "https://raw.githubusercontent.com/dlnicoz/DhirajContractor/master/src/assets/founder.webp";

  return (
    <>
      <section>
        <div className="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 ">
          <div className="grid grid-cols-1 2xl:h-screen lg:grid-cols-2">
            <div className="relative z-10 lg:py-16 ">
              <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                  alt="House"
                  src={Founder}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>

            <div className=" relative flex items-center bg-gray-100 ">
              <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

              <div className="p-8 sm:p-16 lg:p-24">
                <h1 className="font-coolvetica text-3xl text-black font-bold sm:text-5xl">
                  Welcome To,
                </h1>

                <h1 className="font-coolvetica text-3xl font-bold sm:text-5xl tracking-wide text-gray-700">
                  <span className="text-green-500">
                    {info.name.split(" ")[0]}{" "}
                    {info.name.split(" ")[1].substring(0, 2)}
                  </span>
                  {info.name.substring(
                    info.name.split(" ")[0].length + 3,
                    info.name.length,
                  )}
                </h1>
                <h2 className="font-jost text-xl mt-3 font-bold sm:text-2xl  text-gray-500">
                  I&#39;m{" "}
                  <span className="text-green-500 underline">
                    {info.founder.split(" ")[0]}{" "}
                    {info.founder.split(" ")[1].substring(0, 2)}
                  </span>
                  <span className="underline">
                    {info.founder.substring(
                      info.founder.split(" ")[0].length + 3,
                      info.founder.length,
                    )}{" "}
                  </span>{" "}
                  {info.about}
                </h2>

                <p className="mt-4 text-lg font-jost text-gray-700">
                  {info.moreabout}
                </p>

                <Link
                  to="/About"
                  className="mt-8 inline-block font-coolvetica rounded border border-green-600 bg-green-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-green-600 tracking-widest focus:outline-none focus:ring active:text-green-500"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default WelcomePage;
