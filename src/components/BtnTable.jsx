import React, { useState } from 'react';
import { addTable } from '../actions';
import { Formik, Form, Field } from 'formik';
import { connect } from 'react-redux';

const BtnTable = (props) => {
  const [state, setstate] = useState({ isAdding: false });
  const handleSubmit = () => {
    setstate({ isAdding: true });
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setstate({ isAdding: false });
  };
  const handleAdd = (e) => {
    const { name } = e;
    const ids = props.tables.map((t) => t.id);
    console.log(ids);
    const id = ids[ids.length - 1] + 1;
    props.addTable({ id, name });
    setstate({ isAdding: false });
  };
  return (
    <div>
      {state.isAdding ? (
        <div className='newTable'>
          <Formik
            initialValues={{ name: '' }}
            onSubmit={(values) => handleAdd(values)}
          >
            <Form className='newTable__form'>
              <Field
                type='text'
                className='newTable__form--input'
                name='name'
                id='name'
                placeholder='Introduzca el titulo del board...'
              />
              <div className='newTable__options'>
                <button
                  className='newTable__options--button cancel'
                  onClick={handleCancel}
                >
                  Cancelar
                </button>
                <button
                  className='newTable__options--button success'
                  type='submit'
                >
                  Añadir board
                </button>
              </div>
            </Form>
          </Formik>
        </div>
      ) : (
        <div className='button' onClick={handleSubmit}>
          <div className='button__container'>
            <i className='fas fa-plus button__container--icon'></i>
            <span className='button__container--text'>CREATE A NEW BOARD</span>
          </div>
        </div>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tables: state.tables,
  };
};
const mapDispatchToProps = {
  addTable,
};
export default connect(mapStateToProps, mapDispatchToProps)(BtnTable);
