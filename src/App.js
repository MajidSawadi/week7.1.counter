import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {Container } from 'react-bootstrap';

function App() {

  const dispatch = useDispatch();
  const state = useSelector((state) => state);

      console.log({ state });
      Array.from(Array(state.count));

   

  return (
    <Container className="App">
      <h3>{state.count}</h3>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <input
                className="mr-3"
                onChange={(e) =>
                  dispatch({ type: "CHANGE_COLOR", payload: e.target.value })
                }
              ></input>
    {Array.from(Array(state.count)).map((c, idx) => {
              const boxColor = state.indexColors[idx] || state.defaultColor;
              return (
                <div
                  key={idx}
                  className="d-flex justify-content-around rounded my-1 p-4"
                  style={{ backgroundColor: boxColor }}
                >
                  <div className="w-100">
                    <h1>Box {idx + 1}</h1>
                  </div>
                  <div className="w-100 d-flex align-items-center">
                  <input
                    className="form-control"
                    onChange={(e) =>
                      dispatch({
                        type: "CHANGE_SPECIFIC_BOX",
                        payload: { color: e.target.value, index: idx },
                      })
                    }
                  ></input>
                  </div>
                </div>
              );
            })}
  </Container>
  );
}

export default App;
