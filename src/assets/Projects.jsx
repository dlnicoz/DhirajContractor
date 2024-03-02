import ProjectsCards from "./ProjectsCards";

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
            imgLink={
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            }
            title={"Dadar"}
            altinfo={"dadar project"}
            desc={"well polished"}
            linkpage={"/Project1"}
          />
          <ProjectsCards
            imgLink={
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            }
            title={"Dadar"}
            altinfo={"dadar project"}
            desc={"well polished"}
          />

          <ProjectsCards
            imgLink={
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            }
            title={"Dadar"}
            altinfo={"dadar project"}
            desc={"well polished"}
          />

          <ProjectsCards
            imgLink={
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            }
            title={"Dadar"}
            altinfo={"dadar project"}
            desc={"well polished"}
          />

          <ProjectsCards
            imgLink={
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            }
            title={"Dadar"}
            altinfo={"dadar project"}
            desc={"well polished"}
          />

          <ProjectsCards
            imgLink={
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            }
            title={"Dadar"}
            altinfo={"dadar project"}
            desc={"well polished"}
          />

          <ProjectsCards
            imgLink={
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            }
            title={"Dadar"}
            altinfo={"dadar project"}
            desc={"well polished"}
          />

          <ProjectsCards
            imgLink={
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            }
            title={"Dadar"}
            altinfo={"dadar project"}
            desc={"well polished"}
          />

          <ProjectsCards
            imgLink={
              "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1171&q=80"
            }
            title={"Dadar"}
            altinfo={"dadar project"}
            desc={"well polished"}
          />
        </div>
      </section>
    </>
  );
};
export default Projects;
