const ImageGallery = ({ image }) => {
  return (
    <>
      {image &&
        Object.keys(image).map((key) => (
          <img
            className="md:p-8 p-2 h-auto mx-auto  max-w-full rounded-lg object-cover object-center "
            key={key}
            src={image[key]}
            alt={`Image ${key}`}
          />
        ))}
    </>
  );
};

export default ImageGallery;
