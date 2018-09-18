import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from "./store/index";

// Testing redux store in the browser
window.store = store;

ReactDOM.render(<App />, document.getElementById('app'));
