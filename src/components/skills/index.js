import styles from "./style.module.scss";
import Card from "./card";
import Javascript from "../../iconComponents/JavascriptIcon";

function Skills() {
	return (
		<div id="skills" className={styles.skillsContainer}>
			<h2 className={styles.subtitle}>Skills</h2>
			<hr />
			<div className={styles.cardsContainer}>
				<Card
					logo={<Javascript />}
					title="Javascript"
					projects="?"
					hours="?"
				/>
				<Card
					logo={<Javascript />}
					title="Javascript"
					projects="?"
					hours="?"
				/>
				<Card
					logo={<Javascript />}
					title="Javascript"
					projects="?"
					hours="?"
				/>
			</div>
		</div>
	);
}

export default Skills;
