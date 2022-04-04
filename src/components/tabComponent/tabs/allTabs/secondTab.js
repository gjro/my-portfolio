import React from "react";
import styles from "../style.module.scss";
import Extern from "../../../../iconComponents/ExternIcon";

const SecondTab = () => {
	return (
		<div className={styles.contentContainer}>
			<div className={styles.contentHeader}>
				<div className={styles.title}>
					<h3>Gerente de Projetos</h3>
					<p>Set 2021 - Mar 2022</p>
				</div>
				<hr />
				<a target="_blank" rel="noreferrer">
					<Extern className={styles.icon} />
				</a>
			</div>
			<div className={styles.contentBody}>
				<div className={styles.assignment}>
					<h4>Atribuições</h4>
					<ul>
						<li>
							Garanti entregas de qualidade e no prazo com gestão
							ágil de equipes de desenvolvimento de software
							(Scrum e Kanban).
						</li>
						<li>
							Mantive o cliente dentro do projeto por meio de
							definição, priorização, facilitação e acompanhamento
							de Backlog e Roadmap dos produtos em conjunto com os
							Stakeholders.
						</li>
						<li>
							Mantive os projetos alinhados com o objetivo da
							empresa sendo a interseção entre time de
							desenvolvimento, contratante e negócios.
						</li>
						<li>
							Contribui para a manutebilidade do software com a
							criação de um modelo de documentação dos produtos.
						</li>
					</ul>
				</div>
				<div className={styles.achievements}>
					<h4>Conquistas</h4>
					<ul>
						<li>
							Construção do Painel Organizacional da MTI Studio
							para centralizar as informações de todos os projetos
							e demais setores da empresa.
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.contentFooter}>
				<h4>Skills Desenvolvidas</h4>
				<div className={styles.skills}>
					<span> Tecnologia 1</span>
					<span> Tecnologia 2</span>
					<span> Tecnologia 3</span>
				</div>
			</div>
		</div>
	);
};
export default SecondTab;
