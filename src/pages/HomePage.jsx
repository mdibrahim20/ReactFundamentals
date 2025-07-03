import React from "react";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";

const HomePage = () => {
  let [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div>
      <Menu />
      <h1>This is HomePage</h1>
      {JSON.stringify(data)}
    </div>
  );
};
export default HomePage;
