import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RootComponent from './root/rootcomponent';


var loc = document.getElementById("root")
ReactDOM.render(
    <BrowserRouter>
        <RootComponent></RootComponent>
    </BrowserRouter>
    , loc)