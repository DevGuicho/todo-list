import React, { useState } from 'react';
import '../assets/styles/containers/Boards.css';
import Tables from '../components/Tables';
import { connect } from 'react-redux';
import BtnTable from '../components/BtnTable';

const Boards = ({ tables }) => {
  return (
    <div className='tables'>
      {tables.map((table) => (
        <Tables name={table.name} key={table.id} idTable={table.id} />
      ))}

      <BtnTable />
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tables: state.tables,
  };
};
export default connect(mapStateToProps, null)(Boards);
