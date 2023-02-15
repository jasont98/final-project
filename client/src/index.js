import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from "react-router-dom";
import { Provider } from "react-redux"
import store from "./store.js"
import thunkMiddleware from "redux-thunk";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div style={{background: "linear-gradient(#0C7BB3, #F2BAE8)", height: "100vh", overflow: "auto"}}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
