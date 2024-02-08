import Masonry from "./Masonry";

const ImageSection = ({ Images, Title, hight }) => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
      <div
        className="items-start justify-between border-b-2 border-grey  py-4 bg-white
        md:flex mb-6"
      >
        <div className="max-w-lg ">
          <h3 className="text-gray-800 text-2xl font-bold">{Title}</h3>
          {/* <p className="text-gray-600 mt-2"> */}
          {/*   Lorem Ipsum is simply dummy text of the printing and typesetting */}
          {/*   industry. */}
          {/* </p> */}
        </div>
      </div>
      <Masonry images={Images} hight={hight} />
    </div>
  );
};
export default ImageSection;
