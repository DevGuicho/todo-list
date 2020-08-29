import React from "react";
import "../assets/styles/components/Tasks.css";
const Tasks = (props) => {
  return (
    <div className='task'>
      <span
        className={`task__tag ${props.priority}`}
      >{`${props.priority} priority`}</span>
      <p className='task__description'>
        Work on company description. Add description for the menu
      </p>
    </div>
  );
};

export default Tasks;
