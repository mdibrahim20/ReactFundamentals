import React from "react";
import Menu from "../components/Menu";
import { useState } from "react";

const HomePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const FormSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with data:", formData);
  };
  return (
    <div>
      <Menu />
      <h1>This is HomePage</h1>
      <form
        onSubmit={FormSubmit}
        className="p-4 border rounded shadow-sm bg-light"
      >
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            value={formData.name}
            type="text"
            id="name"
            name="name"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            value={formData.email}
            id="email"
            name="email"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Select Role:
          </label>
          <select id="role" name="role" className="form-select" onChange={handleChange}>
            <option value={formData.role === "user"}>User</option>
            <option value={formData.role === "admin"}>Admin</option>
            <option value={formData.role === "moderator"}>Moderator</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label d-block">Gender:</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
export default HomePage;
