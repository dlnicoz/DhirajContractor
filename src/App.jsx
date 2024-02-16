import SideBar from "./assets/SideBar";
import Home from "./assets/Home";
import About from "./assets/About";
import Project from "./assets/Project";
import ProjectItem from "./assets/ProjectItem";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ServicesSection from "./assets/ServicesSection";
function App() {
  return (
    <>
      <Router>
        <>
          <div className="flex">
            <SideBar />
            <Routes>
              <Route index path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Project" element={<Project />}></Route>
              <Route path="/ProjectItem" element={<ProjectItem />}></Route>
              <Route path="/Service" element={<ServicesSection />}></Route>
            </Routes>
          </div>
        </>
      </Router>
    </>
  );
}

export default App;
