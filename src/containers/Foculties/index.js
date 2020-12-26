import React from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import "./foculty.style.css";
import CreateFoculty from "./Create";
import { MODAL_OPEN } from "../../redux/events/types";
import { useDispatch } from "react-redux";

const menu = [
  {
    id: uuidv4(),
    title: "IT",
    uri: "/it",
  },
  {
    id: uuidv4(),
    title: "Ecconomic",
    uri: "/ecconomic",
  },
];

const Foculties = () => {
  const dispatch = useDispatch();
  return (
    <div className="foculty">
      <div className="create_btn">
        <button
          className="btn btn-primary"
          onClick={(e) => dispatch({ type: MODAL_OPEN })}
        >
          Create
        </button>
        <CreateFoculty />
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

export default Foculties;
