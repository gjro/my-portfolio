import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Destaque from "./components/destaque";
import AboutMe from "./components/about-me";
import Projects from "./components/projects";
import Skills from "./components/skills";
import "./styles/global.scss";

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Destaque />
		<AboutMe />
		<Projects />
		<Skills />
	</React.StrictMode>,
	document.getElementById("root")
);