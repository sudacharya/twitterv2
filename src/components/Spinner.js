import React from "react";

const Spinner = () => {
  return (
    <div className="text-center">
      <div style={{ marginTop:30, width: 30, height: 30 }} className="spinner-grow" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;