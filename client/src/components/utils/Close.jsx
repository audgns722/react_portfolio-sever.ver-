import React from "react";

const Close = ({ onClick }) => {
  return (
    <div className="close" onClick={onClick}>
      <div className="circles" id="circles">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <span>close</span>
        <aside className="warning">
          <span>View in Chrome, Firefox or Safari for the best effect!</span>
        </aside>
      </div>
    </div>
  );
};

export default Close;
