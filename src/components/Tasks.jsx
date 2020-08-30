import React from 'react';
import '../assets/styles/components/Tasks.css';
import { addTask } from '../actions';
import { connect } from 'react-redux';
const Tasks = (props) => {
  const handleClick = (e) => {
    props.onFinish(e);
    props.addTask({
      id: 14,
      priority: 'high',
      description: 'Work on company description. Add description for the menu',
      tableId: 1,
    });
  };
  return props.isAdding ? (
    <div className='task'>
      <input
        type='text'
        name=''
        id=''
        placeholder='Tarea'
        className='task__input'
      />
      <button onClick={handleClick}>ok</button>
    </div>
  ) : (
    <div className='task'>
      <span
        className={`task__tag ${props.task.priority}`}
      >{`${props.task.priority} priority`}</span>
      <p className='task__description'>{props.task.description}</p>
    </div>
  );
};
const mapDispatchToProps = {
  addTask,
};
export default connect(null, mapDispatchToProps)(Tasks);
