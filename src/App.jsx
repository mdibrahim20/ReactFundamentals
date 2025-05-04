import React from "react";
import { useRef } from "react";
const App = () => {
  let myHeading = useRef();

  const change = () => {
    myHeading.current.classList.remove("text-white");
    myHeading.current.classList.remove("bg-primary");
    myHeading.current.classList.add("bg-danger");
    myHeading.current.classList.add("text-success");
  };
  return (
    <div>
      <h1 ref={myHeading} className="text-white bg-primary">
        Heading 1
      </h1>
      <button onClick={change} className="btn btn-primary">
        Change
      </button>
    </div>
  );
};

export default App;

/*
💡 Traditional JavaScript DOM Manipulation:
We used to get elements using their ID like this:

<html>
  <h1 id="heading">hi</h1>
  <script>
    const heading = document.getElementById("heading");
    heading.innerText = "Hello";      // Changes plain text
    heading.innerHTML = "Hello 2";    // Replaces with HTML content
  </script>
</html>
*/

/*
💡 React's useRef — The Modern Way:
useRef replaces document.getElementById in React.

✅ Approach 1: Standard useRef with .current
import { useRef } from 'react';

function MyComponent() {
  const headingRef = useRef(null);

  const change = () => {
    headingRef.current.innerText = "Hello";
    headingRef.current.innerHTML = "Hello 2";
  };

  return (
    <>
      <h1 ref={headingRef}>hi</h1>
      <button onClick={change}>Submit</button>
    </>
  );
}

✅ Approach 2: Ref callback (uncommon, but possible)
⚠️ NOT using `.current`, and directly assigning the element.

function MyComponent() {
  let headingRef;

  const change = () => {
    headingRef.innerText = "Hello";
    headingRef.innerHTML = "Hello 2";
  };

  return (
    <>
      <h1 ref={(el) => headingRef = el}>hi</h1>
      <button onClick={change}>Submit</button>
    </>
  );
}

⚠️ Note:
- Approach 2 works, but it's not recommended in React.
- useRef is preferred because it stays consistent across renders.

*/

/*

✅ useRef: Working with image attributes directly

import { useRef } from 'react';

function MyComponent() {
  const myImg = useRef(null);

  const change = () => {
    // Change the image source
    myImg.current.src = "https://placehold.co/600x400/000000/FFFFFF/png";

    // Set height and width via attributes
    myImg.current.setAttribute('height', '200px');
    myImg.current.setAttribute('width', '200px');

    // Alternatively (preferred): use style
    // myImg.current.style.height = '200px';
    // myImg.current.style.width = '200px';
  };

  return (
    <>
      <img
        src="https://placehold.co/600x400"
        ref={myImg}
        alt="Placeholder"
      />
      <button onClick={change}>Submit</button>
    </>
  );
}
*/

/*
useRef working with Input Elements

const App = () => {
  let firstname,lastname = useRef();
  const submit = () => {
    let fname = firstname.value;
    let lname = lastname.value;
    alert(fname+ " " + lname)
  }
  return (
    <div>
      
        <input type="text" placeholder="firstname" name="" ref={(a)=>firstname=a} id="" /><br/><br/>
        <input type="text" placeholder="lastname" ref={(a)=>lastname=a} name="" id="" />
        <button onClick={submit}>submit</button>
      
    </div>
  );
*/

/*
useRef: works with css class.
  let myHeading = useRef();

  const change = () => {
    myHeading.current.classList.remove("text-white");
    myHeading.current.classList.remove("bg-primary");
    myHeading.current.classList.add("bg-danger");
    myHeading.current.classList.add("text-success");
  };
  return (
    <div>
      <h1 ref={myHeading} className="text-white bg-primary">
        Heading 1
      </h1>
      <button onClick={change} className="btn btn-primary">
        Change
      </button>
    </div>
  );
*/
