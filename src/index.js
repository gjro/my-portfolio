import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Destaque from "./components/destaque";
import AboutMe from "./components/about-me";
import "./style.scss";

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Destaque />
		<AboutMe />
	</React.StrictMode>,
	document.getElementById("root")
);
