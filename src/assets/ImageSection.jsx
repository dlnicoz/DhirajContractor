import Masonry from "./Masonry";

const ImageSection = ({ Images, Title }) => {
  return (
    <div className="mx-auto px-4 md:px-8 ">
      <header className="text-center px-4 py-4 border-b-2">
        <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">{Title}</h2>
      </header>
      {/* <p className="text-gray-600 mt-2"> */}
      {/*   Lorem Ipsum is simply dummy text of the printing and typesetting */}
      {/*   industry. */}
      {/* </p> */}
      <Masonry images={Images} />
    </div>
  );
};
export default ImageSection;
