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
            <Link className="tbtn">Read More</Link>
          </div>
        </li>
      </ul>
      <nav className="nav">
        <button
          type="button"
          className="btn prev mt-8 inline-block font-coolvetica rounded border border-green-600 bg-green-500  py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white tracking-widest focus:outline-none focus:ring active:text-white"
        >
          <div className="flex flex-row align-middle">
            <svg
              className="w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <p className="ml-2">Prev</p>
          </div>
        </button>
        <button
          type="button"
          className="btn  next mt-8 inline-block font-coolvetica rounded border border-green-600 bg-green-500  py-3 text-sm font-medium text-black hover:bg-transparent hover:text-white tracking-widest focus:outline-none focus:ring active:text-white"
        >
          <div className="flex flex-row align-middle">
            <span className="mr-2">Next</span>
            <svg
              className="w-5 ml-2"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </button>
      </nav>
    </>
  );
};

export default Project;
