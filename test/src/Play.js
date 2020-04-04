import React from "react";

const Play = ({ onPlayerClick }) => {
  return (
    <svg className="button" viewBox="0 0 500 500" onClick={onPlayerClick}>
      <polygon points="0,0 5,3 0,6" />
    </svg>
  );
};

export default Play;
