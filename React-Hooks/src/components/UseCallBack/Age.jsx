/* eslint-disable react-refresh/only-export-components */
import React from "react";

// eslint-disable-next-line react/prop-types
const Age = function ({ increaseAge, ageCount }) {
  console.log("Age Rendered");
  return (
    <div>
      <h1>Age : {ageCount}</h1>
      <button onClick={increaseAge}>Age increment</button>
    </div>
  );
};

export default React.memo(Age);
