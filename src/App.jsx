import SideBar from "./assets/SideBar";
import Home from "./assets/Home";
import About from "./assets/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <>
          <div className="flex">
            <SideBar />
            <Routes>
              <Route index path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
            </Routes>
          </div>
        </>
      </BrowserRouter>
    </>
  );
}

export default App;
