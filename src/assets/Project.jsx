import { useEffect } from "react";
import { Link } from "react-router-dom";
import ConfigData from "../config.json";
const data = ConfigData.Projects;
const idata = data[0];

const Project = () => {
  useEffect(() => {
    const slider = document.querySelector(".slider");

    const activate = (e) => {
      const items = document.querySelectorAll(".item");
      if (e.target.matches(".next")) {
        slider.append(items[0]);
      }
      if (e.target.matches(".prev")) {
        slider.prepend(items[items.length - 1]);
      }
    };
    document.addEventListener("click", activate, false);
    return () => {
      // Cleanup the event listener on component unmount
      document.removeEventListener("click", activate, false);
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  return (
    <>
      <ul className="slider">
        {/* <li
          className="item card glass"
          style={{
            backgroundImage:
              "url('https://images7.alphacoders.com/878/878663.jpg')",
          }}
        >
          <div className="content card-body font-coolvetica ">
            <h1 className="title">Lossless Youths</h1>
            <p className="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <Link className="tbtn">Read More</Link>
          </div>
        </li> */}
        
        <li
          className="item"
          style={{
            backgroundImage:
            `url('${idata.project1.wurl}')`,
          }}
        >
          <div className="content card-body font-coolvetica ">
            <h1 className="title text-xl">{idata.project1.title}</h1>
            <p className="description">
              {" "}
              {idata.project1.desc}{" "}
            </p>
            <Link className="tbtn" to="/Project1">More</Link>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
            `url('${idata.project2.wurl}')`,
          }}
        >
          <div className="content card-body font-coolvetica ">
            <h1 className="title text-xl">{idata.project2.title}</h1>
            <p className="description">
              {" "}
              {idata.project2.desc}{" "}
            </p>
            <Link className="tbtn" to="/Project2">More</Link>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
            `url('${idata.project3.wurl}')`,
          }}
        >
          <div className="content card-body font-coolvetica ">
            <h1 className="title text-xl">{idata.project3.title}</h1>
            <p className="description">
              {" "}
              {idata.project3.desc}{" "}
            </p>
            <Link className="tbtn" to="/Project3">More</Link>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
            `url('${idata.project4.wurl}')`,
          }}
        >
          <div className="content card-body font-coolvetica ">
            <h1 className="title text-xl">{idata.project4.title}</h1>
            <p className="description">
              {" "}
              {idata.project4.desc}{" "}
            </p>
            <Link className="tbtn" to="/Project4">More</Link>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
            `url('${idata.project5.wurl}')`,
          }}
        >
          <div className="content card-body font-coolvetica ">
            <h1 className="title text-xl">{idata.project5.title}</h1>
            <p className="description">
              {" "}
              {idata.project5.desc}{" "}
            </p>
            <Link className="tbtn" to="/Project5">More</Link>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
            `url('${idata.project6.wurl}')`,
          }}
        >
          <div className="content card-body font-coolvetica ">
            <h1 className="title text-xl">{idata.project6.title}</h1>
            <p className="description">
              {" "}
              {idata.project6.desc}{" "}
            </p>
            <Link className="tbtn" to="/Project6">More</Link>
          </div>
        </li>
        {/* <li
          className="item"
          style={{
            backgroundImage:
            `url('${idata.project7.wurl}')`,
          }}
        >
          <div className="content card-body font-coolvetica ">
            <h1 className="title text-xl">{idata.project7.title}</h1>
            <p className="description">
              {" "}
              {idata.project7.desc}{" "}
            </p>
            <Link className="tbtn" to="/Project7">More</Link>
          </div>
        </li> */}
      </ul>
      <nav className="nav">
        <ion-icon class="btn prev" name="arrow-back-outline"></ion-icon>
        <ion-icon class="btn next" name="arrow-forward-outline"></ion-icon>
      </nav>
    </>
  );
};

export default Project;
