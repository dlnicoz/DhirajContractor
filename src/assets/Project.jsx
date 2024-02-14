import { useEffect } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
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
          className="item"
          style={{
            backgroundImage:
              "url('https://images7.alphacoders.com/878/878663.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">Lossless Youths</h2>
            <p className="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://images7.alphacoders.com/878/878663.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">Estrange Bond</h2>
            <p className="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://images7.alphacoders.com/878/878663.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">The Gate Keeper</h2>
            <p className="description">
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://images7.alphacoders.com/878/878663.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">Last Trace Of Us</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://images7.alphacoders.com/878/878663.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">Urban Decay</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.
            </p>
            <button>Read More</button>
          </div>
        </li>
        <li
          className="item"
          style={{
            backgroundImage:
              "url('https://images7.alphacoders.com/878/878663.jpg')",
          }}
        >
          <div className="content">
            <h2 className="title">The Migration</h2>
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
              fuga voluptatum, iure corporis inventore praesentium nisi. Id
              laboriosam ipsam enim.{" "}
            </p>
            <button>Read More</button>
          </div>
        </li>
      </ul>
      <nav className="nav">
        <FaArrowLeft className="btn prev" name="arrow-back-outline" />
        <FaArrowRight className="btn next" name="arrow-forward-outline" />
      </nav>
    </>
  );
};

export default Project;
