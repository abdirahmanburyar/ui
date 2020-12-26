import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./dashboard.style.css";
import { Link } from "react-router-dom";

const menu = [
  {
    id: uuidv4(),
    title: "Foculties",
    uri: "/foculties",
  },
  {
    id: uuidv4(),
    title: "Students",
    uri: "/students",
  },
  {
    id: uuidv4(),
    title: "Teachers",
    uri: "/teachers",
  },
];

const Dashboard = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="dashboard">
      <div className="search">
        <input
          type="text"
          className="form-control"
          placeholder="Search By Name"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="cards">
        {menu.map((m) => (
          <Link className="card" key={m.id} to={m.uri}>
            {m.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
