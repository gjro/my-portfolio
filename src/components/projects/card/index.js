import React from "react";
import styles from "./style.module.scss";
import Archive from "../../../iconComponents/ArchiveIcon";
import Github from "../../../iconComponents/GithubIcon";
import Extern from "../../../iconComponents/ExternIcon";
function Card(props) {
	function getGithub(asGithub) {
		if (asGithub) {
			return (
				<a target="_blank" rel="noreferrer" href={props.github}>
					<Github className={styles.icon} />
				</a>
			);
		}
	}

	function getExtern(asExtern) {
		if (asExtern) {
			return (
				<a target="_blank" rel="noreferrer" href={props.extern}>
					<Extern className={styles.icon} />
				</a>
			);
		}
	}

	return (
		<div className={styles.card}>
			<div className={styles.icons}>
				<div>
					<Archive width="3.75rem" height="3.438rem" />
				</div>
				<div>
					{getGithub(props.asGithub)}
					{getExtern(props.asExtern)}
				</div>
			</div>
			<div className={styles.body}>
				<h3>{props.title}</h3>
				<p>{props.body}</p>
			</div>
			<div className={styles.footer}>
				<span>{props.tec1}</span>
				<span>{props.tec2}</span>
				<span>{props.tec3}</span>
			</div>
		</div>
	);
}

export default Card;
