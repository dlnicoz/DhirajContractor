import ImageBGallery from "./ImageBGallery";

const ProjectItem = ({ data, pimage }) => {
  return (
    <div className="h-full w-screen bg-white relative ml-2 pt-20 pb-8 md:pt-16 md:pb-0">
      <div>
        <header
          className="text-center mx-auto mb-12 lg:px-20 p-2
          "
        >
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            {data.title}
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
            {data.desc}
          </p>
        </header>
        <ImageBGallery image={pimage} />
      </div>
    </div>
  );
};
export default ProjectItem;
