import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NavvBar from './Navvbar';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';




function countReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return{
        ...state,
        defaultColor: action.payload
      }
      case "CHANGE_SPECIFIC_BOX":
      const indexColors = state.indexColors
      indexColors[action.payload.index] = action.payload.color
      return {
        ...state,
        indexColors: indexColors
      }
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
      case "DECREMENT":
        if (state.count === 1) return state
        return {
          ...state,
          count: state.count - 1
        };
      default:
        return state;
    }
}
const initialState = {
  count: 3,
  indexColors: [null],
  defaultColor: "rgb(215, 71, 66)",
};
const store = createStore(countReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavvBar/>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
