import React from "react";
import styles from "./style.module.scss";
import Archive from "../../../iconComponents/ArchiveIcon";
import Github from "../../../iconComponents/GithubIcon";
import Exern from "../../../iconComponents/ExternIcon";
function Card(props) {
	return (
		<div className={styles.card}>
			<div className={styles.icons}>
				<div>
					<Archive width="3.75rem" height="3.438rem" />
				</div>
				<div>
					<Github className={styles.icon} />
					<Exern className={styles.icon} />
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
