import Parent from "./UseCallBack/Parent";
import UseEffect from "./UseEffect";
import UseMemo from "./UseMemo";
import UseReducer from "./UseReducer";
import UseRef from "./UseRef";
import UseState from "./UseState";

export default function Main() {
  return (
    <div style={{marginBottom : '6rem'}}>
      <UseState />
      <UseReducer />
      <UseEffect />
      <Parent />
      <UseMemo />
      <UseRef/>
    </div>
  );
}
