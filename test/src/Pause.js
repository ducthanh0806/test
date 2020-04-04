import React from "react";

const Pause = ({ onPlayerClick }) => {
  return (
    <svg className="button" viewBox="0 0 500 500" onClick={onPlayerClick}>
      <polygon points="0,0 1.5,0 1.5,6 0,6" />
      <polygon points="2.5,0 4,0 4,6 2.5,6" />
    </svg>
  );
};

export default Pause;
