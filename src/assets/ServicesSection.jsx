import { FaFirefox } from "react-icons/fa6";
import ServiceItem from "./ServiceItem";
import Stats from "./Stats";

const ServicesSection = () => {
  return (
    <div className="h-full w-screen bg-white relative pt-20 pb-8 md:pt-16 md:pb-0">
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* Heading start */}
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            What We Do
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: "0 auto", height: "35px" }}
            xmlSpace="preserve"
          >
            <circle
              cx="50.1"
              cy="30.4"
              r="5"
              className="stroke-primary"
              style={{
                fill: "transparent",
                strokeWidth: "2",
                strokeMiterlimit: "10",
              }}
            ></circle>
            <line
              x1="55.1"
              y1="30.4"
              x2="100"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
            <line
              x1="45.1"
              y1="30.4"
              x2="0"
              y2="30.4"
              className="stroke-primary"
              style={{ strokeWidth: "2", strokeMiterlimit: "10" }}
            ></line>
          </svg>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Save time managing advertising &amp; Content for your business.
          </p>
        </header>
        {/* End heading */}
        {/* row */}
        <div className="flex flex-wrap flex-row -mx-4 text-center">
          {/* Service Blocks */}
          {/* Service 1 */}
          <ServiceItem
            icon={<FaFirefox size="28" />}
            title="Interior Design"
            desc="we jflea jfalkjaflej jfaek"
          />
          <ServiceItem
            icon={<FaFirefox size="28" />}
            title="Interior Design"
            desc="we jflea jfalkjaflej jfaek"
          />
          <ServiceItem
            icon={<FaFirefox size="28" />}
            title="Interior Design"
            desc="we jflea jfalkjaflej jfaek"
          />
          <ServiceItem
            icon={<FaFirefox size="28" />}
            title="Interior Design"
            desc="we jflea jfalkjaflej jfaek"
          />
          <ServiceItem
            icon={<FaFirefox size="28" />}
            title="Interior Design"
            desc="we jflea jfalkjaflej jfaek"
          />
          <ServiceItem
            icon={<FaFirefox size="28" />}
            title="Interior Design"
            desc="we jflea jfalkjaflej jfaek"
          />

          {/* Service 2 */}
          {/* ... (similar structure for other services) */}
        </div>
        {/* end row */}
        <Stats />
      </div>
    </div>
  );
};

export default ServicesSection;