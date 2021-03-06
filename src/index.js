import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import TodoApp
import TodoApp from './TodoApp';
//import Provider from react-redux to give application level state
import {Provider} from 'react-redux';

//import store from redux to make it available to our app
//import store from './redux/store';
import store from './redux/store'

//create const variable for a root app
const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
    <TodoApp />
    </Provider>,
    rootElement
)


//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
