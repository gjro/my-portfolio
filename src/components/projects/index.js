import styles from "./style.module.scss";
import Card from "./card";

function Projects() {
	return (
		<div id="projects" className={styles.projectsContainer}>
			<h2 className={styles.subtitle}>Projects</h2>
			<hr />
			<div className={styles.cardsContainer}>
				<Card
					title="Site Womaneer"
					body="Site institucional desenvolvido para a startup Womaneer, uma empresa focada em conectar mulheres as melhores oportunidades do mercado."
					tec1="Wordpress"
					tec2="Elementor"
					tec3="CSS3"
					github="https://github.com/"
					asGithub={false}
					extern="https://womaneer.com.br/"
					asExtern={true}
				/>
				<Card
					title="Site Mercadapp"
					body="Site institucional desenvolvido para a startup Mercadapp, uma empresa focada em soluções de vendas online para supermercados"
					tec1="Wordpress"
					tec2="Elementor"
					tec3="CSS3"
					github="https://github.com/"
					asGithub={false}
					extern="https://mercadapp.com.br/"
					asExtern={true}
				/>
				<Card
					title="Site legal"
					body="Informações sobre o app legal formações sobre o app legal Informações sobre osdfsdfsfsdf app legal Informações sobre o app legal"
					tec1="Tecnologia 1"
					tec2="Tecnologia 2"
					tec3="Tecnologia 3"
				/>
			</div>
			{/* <div className={styles.buttonContainer}>
				<button className={styles.button}>Show more</button>
			</div> */}
		</div>
	);
}

export default Projects;
