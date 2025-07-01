import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CacheExpensiveComputation = () => {
  const APIData = useRef(null);
  const tableContainer = useRef();

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    APIData.current = data.products; // Only the products array
  };

  const showData = () => {
    if (!APIData.current) return;

    const rows = APIData.current.map((product) => {
      return `
        <tr>
          <td>${product.id}</td>
          <td>${product.title}</td>
          <td>${product.price}</td>
          <td>${product.brand}</td>
        </tr>
      `;
    });

    tableContainer.current.innerHTML = `
      <table class="table table-bordered table-hover table-striped">
        <thead class="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price ($)</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          ${rows.join("")}
        </tbody>
      </table>
    `;
  };

  return (
    <div className="container my-5">
      <div className="card shadow border-0">
        <div className="card-body">
          <h3 className="text-center text-primary mb-4">
            🧠 Product Table Viewer (useRef only)
          </h3>

          <div className="d-flex justify-content-center gap-3 mb-4">
            <button className="btn btn-success" onClick={fetchData}>
              Fetch Data
            </button>
            <button className="btn btn-primary" onClick={showData}>
              Show Table
            </button>
          </div>

          <div ref={tableContainer} className="table-responsive"></div>
        </div>
      </div>
    </div>
  );
};

export default CacheExpensiveComputation;
