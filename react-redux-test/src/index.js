import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import './index.css';
import App from './App';

import stockReducer from "./actions/stockAction";

const store = createStore(stockReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store ={ store }>
        <App />
    </Provider>,
    rootElement 
);
