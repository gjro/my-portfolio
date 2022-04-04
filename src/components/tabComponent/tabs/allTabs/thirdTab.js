import React from "react";
import styles from "../style.module.scss";
import Extern from "../../../../iconComponents/ExternIcon";

const ThirdTab = () => {
	return (
		<div className={styles.contentContainer}>
			<div className={styles.contentHeader}>
				<div className={styles.title}>
					<h3>Desenvolvedor Web</h3>
					<p>Dez 2020 - Fev 2022</p>
				</div>
				<hr />
			</div>
			<div className={styles.contentBody}>
				<div className={styles.assignment}>
					<h4>Atribuições</h4>
					<ul>
						<li>
							Garanti o posicionamento web com o desenvolvimento
							de um Site Institucional responsivo e com alto
							desempenho utilizando Wordpress.
						</li>
						<li>
							Trouxe novas oportunidades por meio de uma Página de
							Captação desenvolvido em Wordpress.
						</li>
						<li>
							Realizei automações conectando o Funil de
							Oportunidades com as demais ferramentas de gestão.
						</li>
						<li>
							Mantive todo o projeto seguindo a identidade visual
							da marca por meio de Design System.
						</li>
					</ul>
				</div>
				<div className={styles.achievements}>
					<h4>Conquistas</h4>
					<ul>
						<li>Apresentação no evento São Paulo Tech Week.</li>
					</ul>
				</div>
			</div>
			<div className={styles.contentFooter}>
				<h4>Skills Desenvolvidas</h4>
				<div className={styles.skills}>
					<span>Wordpress</span>
					<span>Design System</span>
					<span>JavaScript</span>
					<span>React</span>
					<span>Node.js</span>
					<span>Git</span>
					<span>SEO</span>
				</div>
			</div>
		</div>
	);
};
export default ThirdTab;
