import React,{StrictMode} from "react";
import {createRoot} from "react-dom/client";

import {BrowserRouter} from "react-router-dom";

import "./scss/css/index.css";
import App from "./App";

const rootNode = document.getElementById("root");
const root = createRoot(rootNode);

root.render(
    <StrictMode>
        <BrowserRouter/>
        <App/>
        <BrowserRouter/>
    </StrictMode>
)