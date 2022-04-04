import styles from "./style.module.scss";
import Tabs from "../tabComponent/tabs";
function AboutMe() {
	return (
		<div id="MyWorks" className={styles.container}>
			<h2 className={styles.subtitle}>Where I’ve Worked</h2>
			<hr />
			<Tabs />
		</div>
	);
}

export default AboutMe;
