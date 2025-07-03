import React from "react";
import Menu from "../components/Menu";
import { useEffect } from "react";

const HomePage = () => {
const dependencies = [1, 2, 3, 4]; // Defined outside render
useEffect(() => {
  console.log("Hello Ibrahim");
}, dependencies);
  return (
    <div>
      <Menu />
      <h1>This is HomePage</h1>

    </div>
  );
};
export default HomePage;
