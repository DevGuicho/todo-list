import React from "react";
import "../assets/styles/containers/Boards.css";
import Tables from "../components/Tables";
import Tasks from "../components/Tasks";
const Boards = () => {
  return (
    <div className='tables'>
      <Tables name='today'>
        <Tasks priority='high' />
        <Tasks priority='high' />
      </Tables>
      <Tables name='tomorrow' />
      <Tables name='next week' />

      <button className='button'>
        <div className='button__container'>
          <i className='fas fa-plus button__container--icon'></i>
          <span className='button__container--text'>CREATE A NEW BOARD</span>
        </div>
      </button>
    </div>
  );
};

export default Boards;
