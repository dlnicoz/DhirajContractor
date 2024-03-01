const ProjectsCards = ({ imgLink, altinfo, title, desc }) => {
  return (
    <>
      <div className="w-full bg-grey-400 rounded-lg sahdow-lg overflow-hidden flex flex-col justify-center items-center">
        <div>
          <img
            className="object-center object-cover h-auto w-full"
            src={imgLink}
            alt={altinfo}
          />
        </div>
        <div className="text-center py-8 sm:py-6">
          <p className="text-xl text-gray-700 font-bold mb-2">{title}</p>
          <p className="text-base text-gray-400 font-normal">{desc}</p>
        </div>
      </div>
    </>
  );
};
export default ProjectsCards;
