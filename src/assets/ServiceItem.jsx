const ServiceItem = ({ icon, title, desc }) => {
  return (
    <div
      className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp"
      data-wow-duration="1s"
      style={{
        visibility: "visible",
        animationDuration: "1s",
        animationName: "fadeInUp",
      }}
    >
      <div className="py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
        <div className="inline-block text-gray-900 mb-4">{icon}</div>
        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          {title}
        </h3>
        {desc.split("\n").map((line, index) => (
          <p key={index} className="text-gray-500">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};
export default ServiceItem;
