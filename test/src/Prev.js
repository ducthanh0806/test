import React from "react";

const Prev = ({ onPlayerClick }) => {
  return (
    <svg className="button" viewBox="0 0 500 500" onClick={onPlayerClick}>
      <polygon points="0,0 1,0 1,6 0,6" />
      <polygon points="7,0 7,6 1,3" />
    </svg>
  );
};

export default Prev;
