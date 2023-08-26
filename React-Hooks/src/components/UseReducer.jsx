import { useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);



  const clickIncrement = () => {
    dispatch({ type: "increment" });
  };

  const clickDecrement = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <div>
      <h1>
        <button onClick={clickIncrement}>+ </button>UseReducer counter :{"  "}
        {state.count} <button onClick={clickDecrement}>-</button>
      </h1>
    </div>
  );
}

export default UseReducer;
