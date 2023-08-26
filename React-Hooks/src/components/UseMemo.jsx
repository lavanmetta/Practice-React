import { useMemo, useState } from "react";

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const resNum = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const backGroundStyle = {
    backgroundColor: dark ? "black" : "white",
    padding: "18px",
    margin: "10px",
  };

  const colorHeading = {
    color: dark ? "white" : "black",
  };

  return (
    <div style={backGroundStyle}>
      <h1 style={colorHeading}>UseMemo Hook Component</h1>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />

        <button onClick={() => setDark(!dark)}>Dark Mode</button>
        <h3 style={colorHeading}>number : {resNum}</h3>
      </div>
    </div>
  );
}

const slowFunction = (number) => {
  for (let i = 0; i < 100000000000000; i++) {
    
    return number * 2;
  }
};

export default UseMemo;
