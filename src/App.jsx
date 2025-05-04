import React from "react";
import {useRef} from "react"
const App = () => {
  const myHeading = useRef();
  const myHeading2 = useRef();

  const change = () => {
    myHeading.current.innerText = "Heading changed";
    myHeading2.current.innerHTML = "<ul><li>A</li><li>B</li></ul>";
  }

  return (
    <div>
      <h1 ref={myHeading}>Heading one</h1>
      <h1 ref={myHeading2}>Heading one</h1>
      <button onClick={change}>Submit</button>
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
