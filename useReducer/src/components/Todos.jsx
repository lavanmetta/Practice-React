import { useReducer } from "react";
import { intialState, reducer } from "./reducer";

export default function Todos() {
  const [todos, dispatch] = useReducer(reducer, intialState);

  const handleChange = (e) => {
    dispatch({
      type: "ADD_TODO",
      payload: e.target.value,
    });
  };

  function handleDelete(id) {
    dispatch({
      type: "DELETE_TODO",
      payload: id,
    });

    console.log(id);
  }

  return (
    <div>
      <h2>Todoos {todos.length}</h2>
      <input onBlur={handleChange} />
      <hr />

      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.name} <span onClick={() => handleDelete(todo.id)}>🗑️</span>
        </li>
      ))}
    </div>
  );
}
