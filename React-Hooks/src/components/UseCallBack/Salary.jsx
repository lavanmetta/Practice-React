/* eslint-disable react-refresh/only-export-components */
import React from "react";

/* eslint-disable react/prop-types */
function Salary({ increaseSalary, salaryCount }) {
  console.log("salary Renderd");
  return (
    <div>
      <h1>Salary : {salaryCount}</h1>
      <button onClick={increaseSalary}>Increment for per Year</button>
    </div>
  );
}

export default React.memo(Salary);
