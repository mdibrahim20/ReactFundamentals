import React from "react";
import Menu from "../components/Menu";
import { useEffect, useState } from "react";

const HomePage = () => {
  let [data, setData] = useState([]);
useEffect(() => {
    async function fetchData() {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setData(data);
        console.log(data);
    }
    fetchData();
}, []);

  return (
    <div>
      <Menu />
      <h1>This is HomePage</h1>
      <h1>Testing Async Await Data</h1>
      {JSON.stringify(data)}
    </div>
  );
};
export default HomePage;
