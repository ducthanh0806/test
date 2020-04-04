import React from "react";

const Next = ({ onPlayerClick }) => {
  return (
    <svg className="button" viewBox="0 0 500 500" onClick={onPlayerClick}>
      <polygon points="0,0 5,3 0,6" />
      <polygon points="6,0 5,0 5,6 6,6" />
    </svg>
  );
};

export default Next;
