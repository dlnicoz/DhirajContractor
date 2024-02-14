const ImageGallery = ({ image }) => {
  return (
    <>
      {Object.keys(image).map((key) => (
        <img key={key} src={image[key]} alt={`Image ${key}`} />
      ))}
    </>
  );
};

export default ImageGallery;
