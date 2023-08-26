import { useState } from "react";

function UseEffect() {
  const [data, setData] = useState([]);

  const handleButton = () => {
    const URL = "https://jsonplaceholder.typicode.com/todos";

    fetch(URL)
      .then((response) => response.json())
      .then((json) => setData(json));
  };
  return (
    <div>
      <h1>UseEffect Hook</h1>
      {data.map((each) => (
        <ul key={each.id}>
          <li>{each.title}</li>
        </ul>
      ))}
      <button onClick={handleButton}>Retrive Data</button>
    </div>
  );
}

export default UseEffect;
