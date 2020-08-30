import React from "react";
import "../assets/styles/containers/Boards.css";
import Tables from "../components/Tables";
import { connect } from "react-redux";

const Boards = ({ tables }) => {
  return (
    <div className='tables'>
      {tables.map((table) => (
        <Tables name={table.name} key={table.id} idTable={table.id} />
      ))}
      <button className='button'>
        <div className='button__container'>
          <i className='fas fa-plus button__container--icon'></i>
          <span className='button__container--text'>CREATE A NEW BOARD</span>
        </div>
      </button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tables: state.tables,
  };
};
export default connect(mapStateToProps, null)(Boards);
