import styles from "./style.module.scss";

function Destaque() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Gilberto Junior</h1>
			<h2 className={styles.subtitle}>Software Engineer</h2>
			<div className={styles.buttonContainer}>
				<a href="#skills" className={styles.button}>
					Know my work
				</a>
			</div>
		</div>
	);
}

export default Destaque;
