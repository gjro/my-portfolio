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
			<div className={styles.skills}>
				<div className={styles.cardsContainer}>
					<Card
						// logo={<Javascript />}
						title="Javascript"
						projects="7"
						hours="115"
					/>
					<Card
						// logo={<CSS />}
						title="CSS3"
						projects="10"
						hours="178"
					/>
					<Card
						// logo={<HTML />}
						title="HTML5"
						projects="11"
						hours="190"
					/>
					<Card
						// logo={<HTML />}
						title="Wordpress"
						projects="5"
						hours="105"
					/>
					<Card
						// logo={<Javascript />}
						title="React.js"
						projects="3"
						hours="100"
					/>
					<Card
						// logo={<Javascript />}
						title="Node.js"
						projects="2"
						hours="60"
					/>
					<Card
						// logo={<Javascript />}
						title="mySQL"
						projects="3"
						hours="74"
					/>
					<Card
						// logo={<Javascript />}
						title="Git"
						projects="11"
						hours="180"
					/>
				</div>
			</div>
		</div>
	);
}

export default Skills;
