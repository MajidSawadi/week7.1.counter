import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import {Provider} from 'react-redux';




function countReducer(state = initialState, action) {
  switch (action.type) {
    case "CHANGE_COLOR":
      return{
        ...state,
        defaultColor: action.payload
      }
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1
      };
      case "DECREMENT":
  return {
    ...state,
    count: state.count - 1
  };
      default:
        return state;
    }
}
const initialState = {
  count: 1,
  indexColors: [null],
  defaultColor: "rgb(215, 71, 66)",
};
const store = createStore(countReducer);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
