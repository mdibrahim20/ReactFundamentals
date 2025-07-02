import React from "react";
import Menu from "../components/Menu";
import { useState } from "react";

const HomePage = () => {
  const [number, setNumber] = useState(0);
  const [user, setUser] = useState({
    name: "Alice",
    email: "alice@example.com",
    address: {
      city: "Wonderland",
      zip: "0001",
    },
  });

  const updateCity = () => {
    setUser({
      ...user, // spread the outer object
      address: {
        ...user.address, // spread the nested object
        city: "New York", // update just the city
      },
    });
  };

const [todos, setTodos] = useState([
    { id: 1, task: "Learn useState" },
    { id: 2, task: "Master immutability" },
  ]);

  const addTodo = () => {
    const newTodo = { id: Date.now(), task: "New Task" };
    setTodos([...todos, newTodo]); // ⬅️ Immutable add
  };

  const removeTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id); // ⬅️ Immutable remove
    setTodos(updated);
  };

  return (
    <div>
      <Menu />
      <h1>This is HomePage</h1>
      <h1>Number:{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Count</button>
        <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="text-center text-primary mb-4">📦 Immutable Object State</h3>

          <ul className="list-group mb-4">
            <li className="list-group-item">Name: {user.name}</li>
            <li className="list-group-item">Email: {user.email}</li>
            <li className="list-group-item">City: {user.address.city}</li>
            <li className="list-group-item">ZIP: {user.address.zip}</li>
          </ul>

          <div className="text-center">
            <button className="btn btn-warning" onClick={updateCity}>
              🌆 Change City to New York
            </button>
          </div>
        </div>
      </div>
      <div className="container my-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h3 className="text-center text-success mb-4">📝 Immutable Todo List</h3>

          <ul className="list-group mb-3">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {todo.task}
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => removeTodo(todo.id)}
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>

          <div className="text-center">
            <button className="btn btn-primary" onClick={addTodo}>
              ➕ Add Todo
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default HomePage;
