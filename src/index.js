// import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

// const App = () => {
// 	return <h1>Hello World!</h1>;
// };

//ReactDOM.render(<App />, document.getElementById("app"));

import { createRoot } from "react-dom/client";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
