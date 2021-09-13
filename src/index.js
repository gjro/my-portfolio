import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/header";
import Destaque from "./components/destaque";
import AboutMe from "./components/about-me";
import Projects from "./components/projects";
import Skills from "./components/skills";
import Contact from "./components/contact";
import Footer from "./components/footer";
import "./styles/global.scss";

ReactDOM.render(
	<React.StrictMode>
		<Header />
		<Destaque />
		<AboutMe />
		<Projects />
		<Skills />
		<Contact />
		<Footer />
	</React.StrictMode>,
	document.getElementById("root")
);
