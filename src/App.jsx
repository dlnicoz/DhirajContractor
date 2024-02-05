import SideBar from "./assets/SideBar";
import Home from "./assets/Home";
import About from "./assets/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
            </Routes>
          </div>
        </>
      </Router>
    </>
  );
}

export default App;
