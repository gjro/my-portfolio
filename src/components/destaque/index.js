import styles from "./style.module.scss";

function Destaque() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Gilberto Junior</h1>
			<h2 className={styles.subtitle}>Software Engineer</h2>
			<button className={styles.button}>Know my work</button>
		</div>
	);
}

export default Destaque;
