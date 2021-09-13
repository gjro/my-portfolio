import styles from "./style.module.scss";
import Card from "./card";

function Projects() {
	return (
		<div id="projects" className={styles.projectsContainer}>
			<h2 className={styles.subtitle}>Projects</h2>
			<hr />
			<div className={styles.cardsContainer}>
				<Card
					title="Site legal"
					body="Informações sobre o app legal formações sobre o app legal Informações sobre osdfsdfsfsdf app legal Informações sobre o app legal"
					tec1="Tecnologia 1"
					tec2="Tecnologia 2"
					tec3="Tecnologia 3"
				/>
				<Card
					title="Site legal"
					body="Informações sobre o app legal formações sobre o app legal Informações sobre osdfsdfsfsdf app legal Informações sobre o app legal"
					tec1="Tecnologia 1"
					tec2="Tecnologia 2"
					tec3="Tecnologia 3"
				/>
				<Card
					title="Site legal"
					body="Informações sobre o app legal formações sobre o app legal Informações sobre osdfsdfsfsdf app legal Informações sobre o app legal"
					tec1="Tecnologia 1"
					tec2="Tecnologia 2"
					tec3="Tecnologia 3"
				/>
				<Card
					title="Site legal"
					body="Informações sobre o app legal formações sobre o app legal Informações sobre osdfsdfsfsdf app legal Informações sobre o app legal"
					tec1="Tecnologia 1"
					tec2="Tecnologia 2"
					tec3="Tecnologia 3"
				/>
				<Card
					title="Site legal"
					body="Informações sobre o app legal formações sobre o app legal Informações sobre osdfsdfsfsdf app legal Informações sobre o app legal"
					tec1="Tecnologia 1"
					tec2="Tecnologia 2"
					tec3="Tecnologia 3"
				/>
				<Card
					title="Site legal"
					body="Informações sobre o app legal formações sobre o app legal Informações sobre osdfsdfsfsdf app legal Informações sobre o app legal"
					tec1="Tecnologia 1"
					tec2="Tecnologia 2"
					tec3="Tecnologia 3"
				/>
			</div>
			<div className={styles.buttonContainer}>
				<button className={styles.button}>Show more</button>
			</div>
		</div>
	);
}

export default Projects;
