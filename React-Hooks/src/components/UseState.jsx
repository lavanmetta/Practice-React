import { useState } from "react";

function UseState() {
  const [count, setCount] = useState(0);

  const buttonHandler = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>
        UseState Counter {count}
        <button onClick={buttonHandler}>Increase</button>
      </h1>
    </div>
  );
}

export default UseState;
