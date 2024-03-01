import SideBar from "./assets/SideBar";
import Home from "./assets/Home";
import About from "./assets/About";
import Project from "./assets/Project";
import Projects from "./assets/Projects";
import ProjectItem from "./assets/ProjectItem";
// projects starts
import Project1 from "./assets/projectPages/Project1";
import Project2 from "./assets/projectPages/Project2";
import Project3 from "./assets/projectPages/Project3";
import Project4 from "./assets/projectPages/Project4";
import Project5 from "./assets/projectPages/Project5";
import Project6 from "./assets/projectPages/Project6";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicesSection from "./assets/ServicesSection";
function App() {
  return (
    <>
      <Router>
        <>
          <div className="flex bg-white">
            <SideBar />
            <Routes>
              <Route index path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Project" element={<Project />}></Route>
              <Route path="/Projects" element={<Projects />}></Route>
              <Route path="/ProjectItem" element={<ProjectItem />}></Route>
              <Route path="/Service" element={<ServicesSection />}></Route>
              {/* projects starts */}

              <Route path="/Project1" element={<Project1 />}></Route>
              <Route path="/Project2" element={<Project2 />}></Route>
              <Route path="/Project3" element={<Project3 />}></Route>
              <Route path="/Project4" element={<Project4 />}></Route>
              <Route path="/Project5" element={<Project5 />}></Route>
              <Route path="/Project6" element={<Project6 />}></Route>
            </Routes>
          </div>
        </>
      </Router>
    </>
  );
}

export default App;
