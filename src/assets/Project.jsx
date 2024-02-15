import { useEffect } from "react";
import { Link } from "react-router-dom";

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
        <li
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
        </li>
        <li
          className="item"
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
        </li>
        <li
          className="item"
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
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://images7.alphacoders.com/878/878663.jpg')",
          }}
        >
          <div className="content card-body font-coolvetica ">
            <h1 className="title text-xl">Lossless Youths</h1>
            <p className="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <Link className="tbtn">More</Link>
          </div>
        </li>
      </ul>
      <nav className="nav">
        <ion-icon class="btn prev" name="arrow-back-outline"></ion-icon>
        <ion-icon class="btn next" name="arrow-forward-outline"></ion-icon>
      </nav>
    </>
  );
};

export default Project;
