import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./tailwind.output.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ContextContainer from "./functions/contextContainer";
import { Web3ReactProvider } from '@web3-react/core'
import Web3 from 'web3'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";


function getLibrary(provider: any) {
    let webProvider = new Web3(provider);
    return webProvider;
}

ReactDOM.render(

    <React.StrictMode>
            <Router>
            <ContextContainer.Provider>
            <Web3ReactProvider getLibrary={getLibrary}>
                <App />
            </Web3ReactProvider>
            </ContextContainer.Provider>
            </Router>
    </React.StrictMode>
    ,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
