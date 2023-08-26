import { useCallback, useState } from "react";
import Age from "./Age";
import Salary from "./Salary";

function Parent() {
  const [salary, setSalary] = useState(12000);
  const [age, setAge] = useState(23);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 4000);
  }, [salary]);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  console.log("parent component rendered");

  return (
    <div>
      <h1>Usecallback & React.memo</h1>
      <Age increaseAge={incrementAge} ageCount={age} />
      <Salary increaseSalary={incrementSalary} salaryCount={salary} />
    </div>
  );
}

export default Parent;
