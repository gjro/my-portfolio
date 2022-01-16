import styles from "./style.module.scss";
import Card from "./card";
import Javascript from "../../iconComponents/JavascriptIcon";
import CSS from "../../iconComponents/Css3Icon";
import HTML from "../../iconComponents/Html5Icon";

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
				<Card logo={<CSS />} title="CSS 3" projects="?" hours="?" />
				<Card logo={<HTML />} title="HTML 5" projects="?" hours="?" />
			</div>
		</div>
	);
}

export default Skills;
