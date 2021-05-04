import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";


function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

      console.log({ state });
      Array.from(Array(state.count));

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <input
  onChange={(e) => dispatch({ type: "CHANGE_COLOR", payload: e.target.value })}
></input>
    {Array.from(Array(state.count)).map((c, idx) => {
      return <div style={{ backgroundColor: state.defaultColor }} key={idx}>
      Box {idx}
    </div>;
    })}
  </div>
  );
}

export default App;
