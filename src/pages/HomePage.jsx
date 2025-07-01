import React from "react";
import Menu from "../components/Menu";
import CacheAPI from "../components/CacheExpensiveComputation";
import { useRef } from "react";

const HomePage = () => {
  const statusRef = useRef();
  const imgAtt = useRef();
  const fname = useRef();
  const lname = useRef();
  const showName = useRef();
  const myHeadLine = useRef();
  const toggleStatus = () => {
    const currentText = statusRef.current.innerText;
    statusRef.current.innerText =
      currentText === "✅ Task Completed"
        ? "⏳ Task In Progress"
        : "✅ Task Completed";
  };
  const toggleImage = () => {
    const original = {
      src: "https://placehold.co/600x400/png",
      width: 600,
      height: 400,
    };
    const alternate = {
      src: "https://placehold.co/600x400/000000/FFF",
      width: 700,
      height: 700,
    };

    const currentSrc = imgAtt.current.getAttribute("src");
    const isOriginal = currentSrc === original.src;

    const newImage = isOriginal ? alternate : original;

    imgAtt.current.setAttribute("src", newImage.src);
    imgAtt.current.setAttribute("width", newImage.width);
    imgAtt.current.setAttribute("height", newImage.height);
  };
  const showNames = () => {
    showName.current.innerText =
      fname.current.value + " " + lname.current.value;
    alert(fname.current.value + " " + lname.current.value);
  };
  const headingCSS = () => {
    // Example: remove text-danger and add a new style
    myHeadLine.current.classList.remove("text-danger");
    myHeadLine.current.classList.add("text-success", "fw-bold");
  };

  return (
    <div>
      <Menu />
      <h1>This is HomePage</h1>

      <div
        style={{
          background: "navy",
          padding: 20,
          color: "white",
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <h2>useRef with innerText and innerHTML</h2>
        <p ref={statusRef}>⏳ Task In Progress</p>
        <button onClick={toggleStatus}>Toggle Status</button>
      </div>
      <div
        style={{
          background: "navy",
          padding: 20,
          color: "white",
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <h2>useRef with Attributes</h2>
        <img
          ref={imgAtt}
          src="https://placehold.co/600x400/png"
          alt="placeholder"
          width={600}
          height={400}
        />
        <br />
        <button onClick={toggleImage}>Toggle Image & Size</button>
      </div>
      <div
        style={{
          background: "navy",
          padding: 20,
          color: "white",
          borderRadius: 10,
          marginBottom: 20,
        }}
      >
        <h2>useRef with Input Elements</h2>
        <label htmlFor="fname">First Name</label>
        <input ref={fname} type="text" name="" id="fname" />
        <br />
        <br />
        <label htmlFor="lname">Last Name</label>
        <input ref={lname} type="text" name="" id="lname" />
        <br />
        <br />
        <button onClick={showNames}>Submit</button>
        <br />
        <br />
        <h3 ref={showName}></h3>
      </div>
      <div className="container my-4">
        <div className="card bg-dark text-white p-4 shadow">
          <h1 className="card-title mb-3">useRef with CSS Class</h1>
          <h2 className="text-danger fs-1" ref={myHeadLine}>
            Heading
          </h2>
          <button className="btn btn-outline-light mt-3" onClick={headingCSS}>
            Change Heading Style
          </button>
        </div>
      </div>
      <CacheAPI/>
    </div>
  );
};

export default HomePage;
