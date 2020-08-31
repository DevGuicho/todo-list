import React, { useState } from 'react';
import '../assets/styles/components/Tables.css';
import Tasks from './Tasks';
import { connect } from 'react-redux';
const Tables = (props) => {
  const [state, setState] = useState({ isAdding: false });

  const handleClick = (e) => {
    e.preventDefault();
    setState({ isAdding: true });
  };
  const handleFinish = () => {
    /*e.preventDefault();*/
    setState({ isAdding: false });
  };

  return (
    <div className='card'>
      <div className='card__header'>
        <h3>{props.name}</h3>
        <i className='fas fa-ellipsis-v'></i>
      </div>
      {props.tasks
        .filter((t) => t.tableId === props.idTable)
        .map((task) => (
          <Tasks task={task} key={task.id} />
        ))}
      {state.isAdding ? (
        <Tasks isAdding onFinish={handleFinish} idTable={props.idTable} />
      ) : null}
      <div className='card__add' onClick={handleClick}>
        <div className='card__icon'>
          <i className='fas fa-plus'></i>
        </div>
        <span className='card__add--text'>Add Task</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps)(Tables);
