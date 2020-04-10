import React from "react";
import "./Empty.scss";

function Empty() {
  return (
    <div className="gca-empty-wrapper">
      <img
        src="./images/no_results_found.png"
        className="gca-empty-result"
        alt="no_result_found"
      />
    </div>
  );
}

export default Empty;
