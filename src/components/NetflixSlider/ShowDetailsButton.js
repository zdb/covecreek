import React from 'react';
// import IconArrowDown from './Icons/IconArrowDown'
import IconArrowUp from './Icons/IconArrowUp'
import './ShowDetailsButton.scss'

const ShowDetailsButton = ({ onClick }) => (
  <button onClick={onClick} className="show-details-button">
    <span>
      <IconArrowUp />
    </span>
  </button>
);

export default ShowDetailsButton;
