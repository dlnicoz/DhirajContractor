import ProjectItem from "../ProjectItem";
import ConfigData from "../../config.json";
const data = ConfigData.Projects;
const idata = data[0];
const pdata = idata.project5;
const pimages = pdata.images;
const fdata = pdata;
const Project1 = () => {
  return (
    <>
      <ProjectItem data={fdata} pimage={pimages} />
    </>
  );
};
export default Project1;
