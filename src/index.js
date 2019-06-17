import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';

import './index.css';
import Todolist from "./Todolist"
//import registerServiceWorker from './registerServiceWorker';

//var destination = document.querySelector("#container");

ReactDOM.render(
    <Provider Store= {configureStore()}>
    <Todolist />
    </Provider>,
    document.getElementById('root')
    //destination
);
module.hot.accept();
//registerServiceWorker();
