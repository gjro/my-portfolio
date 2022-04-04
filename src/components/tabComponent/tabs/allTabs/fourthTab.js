import React from "react";
import styles from "../style.module.scss";
import Extern from "../../../../iconComponents/ExternIcon";

const FourthTab = () => {
	return (
		<div className={styles.contentContainer}>
			<div className={styles.contentHeader}>
				<div className={styles.title}>
					<h3>Gerente de Projetos</h3>
					<p>Ago 2018 - Ago 2022</p>
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
							loren impsum loren impsum loren impsum loren
							impsumloren impsumloren impsum loren impsumloren
							impsumloren impsumloren impsumloren impsumloren
							impsum loren impsumloren impsumloren impsumloren
							impsum
						</li>
						<li>
							loren impsum loren impsum loren impsum loren
							impsumloren impsumloren impsum loren impsumloren
							impsumloren impsumloren impsumloren impsumloren
							impsum loren impsumloren impsumloren impsumloren
							impsum
						</li>
					</ul>
				</div>
				<div className={styles.achievements}>
					<h4>Conquistas</h4>
					<ul>
						<li>
							loren impsum loren impsum loren impsum loren
							impsumloren impsumloren impsum loren impsumloren
							impsumloren impsumloren impsumloren impsumloren
							impsum loren impsumloren impsumloren impsumloren
							impsum
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
export default FourthTab;
