import ImageGallery from "./ImageGallery";

const Masonry = ({ images, hight }) => {
  return (
    <div className="p-5 md:p-10">
      <div className="columns-1 gap-5 lg:gap-6 sm:columns-2 lg:columns-3 xl:columns-4 [&>img:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8">
        <ImageGallery image={images} />
      </div>
    </div>
  );
};

export default Masonry;
