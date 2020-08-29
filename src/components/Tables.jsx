import React from "react";
import "../assets/styles/components/Tables.css";
import Tasks from "./Tasks";
const Tables = (props) => {
  return (
    <div className='card'>
      <div className='card__header'>
        <h3>{props.name}</h3>
        <i className='fas fa-ellipsis-v'></i>
      </div>
      {props.children}

      <div className='card__add'>
        <div className='card__icon'>
          <i className='fas fa-plus'></i>
        </div>
        <span className='card__add--text'>Add Task</span>
      </div>
    </div>
  );
};

export default Tables;
