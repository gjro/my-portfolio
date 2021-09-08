import styles from "./style.module.scss";
import archive from "../../assets/img/archive-icon.png";
import github from "../../assets/img/github-icon.svg";
import extern from "../../assets/img/extern-icon.svg";
function Projects() {
	return (
		<div className={styles.projectsContainer}>
			<h2 className={styles.subtitle}>Projects</h2>
			<hr />

			<div className={styles.card}>
				<div className={styles.icons}>
					<div>
						<img src={archive} alt="archive-icon" />
					</div>
					<div>
						<img
							className={styles.fill}
							src={github}
							alt="github-icon"
						/>
						<img
							className={styles.fill}
							src={extern}
							alt="extern-icon"
						/>
					</div>
				</div>
				<div>
					<h3>Site de coisa legal</h3>
					<p></p>
				</div>
				<div>
					<span>oi</span>
					<span>oi</span>
				</div>
			</div>
		</div>
	);
}

export default Projects;
