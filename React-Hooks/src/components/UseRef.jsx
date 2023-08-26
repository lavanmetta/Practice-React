import { useRef } from "react";

function UseRef() {
  const renderCount = useRef(0);

  renderCount.current++;

  const handleClick = useRef(() => {
    console.log("button clicked");
  });

  return (
    <div>
      <p>Component has rendered {renderCount.current} times.</p>
      <button onClick={handleClick.current}>Click Me</button>
    </div>
  );
}

export default UseRef;
