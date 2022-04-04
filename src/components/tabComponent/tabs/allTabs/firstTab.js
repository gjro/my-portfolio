import React from "react";
import styles from "../style.module.scss";
import Extern from "../../../../iconComponents/ExternIcon";

const FirstTab = () => {
	return (
		<div className={styles.contentContainer}>
			<div className={styles.contentHeader}>
				<div className={styles.title}>
					<h3>Diretor Presidente</h3>
					<p>Ago 2018 - Jun 2022</p>
				</div>
				<hr />
			</div>
			<div className={styles.contentBody}>
				<div className={styles.assignment}>
					<h4>Atribuições</h4>
					<ul>
						<li>
							Construção, facilitação e acompanhamento do
							planejamento estratégico utilizando OKR, SWOT e
							5W2H.
						</li>
						<li>
							Articulação, sucesso e guardião das parcerias, da
							UFC e da federação das empresas juniores do Ceará.
						</li>
					</ul>
				</div>
				<div className={styles.achievements}>
					<h4>Conquistas</h4>
					<ul>
						<li>
							Reformulação do modelo de Planejamento Estratégico,
							de Negócio e de Cultura da organização.
						</li>
						<li>
							Construção de um Mapa de Carreiras elogiado e
							adotado por outras EJ’s. (Gestão de Desempenho e
							PDI).
						</li>
						<li>
							Atuação em todos os cargos de todas as carreiras
							dentro da organização.{" "}
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.contentFooter}>
				<h4>Skills Desenvolvidas</h4>
				<div className={styles.skills}>
					<span> Resolução de Conflitos</span>
					<span> Inteligência Emocional</span>
					<span> CNV</span>
					<span> Pensamento Estratégico</span>
				</div>
			</div>
		</div>
	);
};

export default FirstTab;
