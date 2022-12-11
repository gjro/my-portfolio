import React from "react";
import styles from "../style.module.scss";
import Extern from "../../../../iconComponents/ExternIcon";

const FirstTab = () => {
	return (
		<div className={styles.contentContainer}>
			<div className={styles.contentHeader}>
				<div className={styles.title}>
					<h3>Techlead</h3>
					<p>May 2022 - Now</p>
				</div>
				<hr />
			</div>
			<div className={styles.contentBody}>
				<div className={styles.assignment}>
					<h4>Atribuições</h4>
					<ul>
						<li>
							Dar direcionamentos técnicos para a equipe de TI.
						</li>
						<li>
							Alinhar tecnicamente os novos desenvolvimentos.
						</li>
						<li>
							Conduzir e entregar features do produto.
						</li>
						<li>
							Garantir a celeridade, qualidade e entrega do produto.
						</li>
						<li>
							Traduzir as demandas da gestão estratégica para a equipe de TI.
						</li>
						<li>
							Ser ponte entre outros times e o time de tecnologia, sempre levando as informações relevantes para as tomadas de decisões.
						</li>
						<li>
							Auxiliar a equipe nas questões técnicas dos desenvolvimentos.
						</li>
						<li>
							Analisar os processos internos e propor melhorias, quando necessário.
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.contentFooter}>
				<h4>Skills Desenvolvidas</h4>
				<div className={styles.skills}>
					<span> Ruby on Rails </span>
					<span> RSpec </span>
					<span> TDD </span>
					<span> AWS </span>
					<span> Heroku </span>
					<span> CI/CD </span>
				</div>
			</div>
		</div>
	);
};

export default FirstTab;
