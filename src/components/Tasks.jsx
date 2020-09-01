import React from 'react';
import '../assets/styles/components/Tasks.css';
import { addTask } from '../actions';
import { connect } from 'react-redux';
import { Formik, Form, Field } from 'formik';
const Tasks = (props) => {
  const handleAdd = (e) => {
    const { description, priority } = e;
    props.addTask({ id: 14, priority, description, tableId: props.idTable });
    props.onFinish();
  };
  const handleCancel = (e) => {
    props.onFinish(e);
  };
  return props.isAdding ? (
    <div className='task'>
      <Formik
        initialValues={{ description: '', priority: '' }}
        onSubmit={(values) => handleAdd(values)}
      >
        <Form>
          <h4 className='task__title'>New Task</h4>
          <div className='select__container' role='group'>
            <label>
              <Field type='radio' name='priority' value='med' />
              <span className='task__tag med'>Med Priority</span>
            </label>
            <label>
              <Field type='radio' name='priority' value='high' />
              <span className='task__tag high'>High Priority</span>
            </label>
            <label>
              <Field type='radio' name='priority' value='low' />
              <span className='task__tag low'>Low Priority</span>
            </label>
          </div>
          <div className='text__container'>
            <Field
              component='textarea'
              name='description'
              id=''
              placeholder='Description'
            />
          </div>

          <div className='task__button'>
            <button className='btnTask cancel' onClick={handleCancel}>
              Cancel
            </button>
            <button className='btnTask success' type='submit'>
              Add
            </button>
          </div>
        </Form>
      </Formik>
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
