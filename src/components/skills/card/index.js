import React from "react";
import styles from "./style.module.scss";
import Javascript from "../../../iconComponents/JavascriptIcon";
function Card(props) {
	return (
		<div className={styles.card}>
			<div className={styles.iconContainer}>
				<div className={styles.skillIcon}>
					<Javascript />
				</div>
			</div>
			<div className={styles.body}>
				<h3>{props.title}</h3>
				<div className={styles.counters}>
					<div className={styles.projectsCount}>
						<div className={styles.shadow}>
							<div className={styles.numberContainer}>
								<p>10</p>
							</div>
						</div>
						<p>Projects</p>
					</div>
					<div className={styles.hoursCount}>
						<div className={styles.shadow}>
							<div className={styles.numberContainer}>
								<p>10</p>
							</div>
						</div>
						<p>Hours</p>
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<a href="#skills">see more |{"->"}</a>
			</div>
		</div>
	);
}

export default Card;
