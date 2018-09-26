import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
/* import store from "./store/index"; */
/* import { Provider } from 'react-redux'; */
/* import store from './store'; */

// Testing redux store in the browser
/* window.store = store; */

ReactDOM.render(<App />, document.getElementById('app'));


/* ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app')); */