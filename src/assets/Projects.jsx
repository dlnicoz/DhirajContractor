import ProjectsCards from "./ProjectsCards";
import ConfigData from "../config.json";
const data = ConfigData.Projects;
const idata = data[0];

const Projects = () => {
  return (
    <>
      <section className="font-coolvetica max-w-6xl mx-auto bg-white px-4 sm:px-6 lg:px-4 py-12">
        <div className="text-center pb-12">
          <h2 className="text-base font-bold text-green-600">
            We have the best equipment in the market
          </h2>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900">
            Check our awesome projects
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectsCards
            imgLink={idata.project1.wurl}
            title={idata.project1.title}
            altinfo={idata.project1.title}
            desc={idata.project1.desc}
            linkpage={"/Project1"}
          />
          <ProjectsCards
            imgLink={idata.project2.wurl}
            title={idata.project2.title}
            altinfo={idata.project2.title}
            desc={idata.project2.desc}
            linkpage={"/Project2"}
          />

          <ProjectsCards
            imgLink={idata.project1.wurl}
            title={idata.project1.title}
            altinfo={idata.project1.title}
            desc={idata.project1.desc}
            linkpage={"/Project1"}
          />

          <ProjectsCards
            imgLink={idata.project1.wurl}
            title={idata.project1.title}
            altinfo={idata.project1.title}
            desc={idata.project1.desc}
            linkpage={"/Project1"}
          />

          <ProjectsCards
            imgLink={idata.project1.wurl}
            title={idata.project1.title}
            altinfo={idata.project1.title}
            desc={idata.project1.desc}
            linkpage={"/Project1"}
          />

          <ProjectsCards
            imgLink={idata.project1.wurl}
            title={idata.project1.title}
            altinfo={idata.project1.title}
            desc={idata.project1.desc}
            linkpage={"/Project1"}
          />

          <ProjectsCards
            imgLink={idata.project1.wurl}
            title={idata.project1.title}
            altinfo={idata.project1.title}
            desc={idata.project1.desc}
            linkpage={"/Project1"}
          />

          <ProjectsCards
            imgLink={idata.project1.wurl}
            title={idata.project1.title}
            altinfo={idata.project1.title}
            desc={idata.project1.desc}
            linkpage={"/Project1"}
          />

          <ProjectsCards
            imgLink={idata.project1.wurl}
            title={idata.project1.title}
            altinfo={idata.project1.title}
            desc={idata.project1.desc}
            linkpage={"/Project1"}
          />
        </div>
      </section>
    </>
  );
};
export default Projects;
