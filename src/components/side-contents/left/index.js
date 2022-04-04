import styles from "./style.module.scss";
import Github from "../../../iconComponents/GithubIcon";
import Linkedin from "../../../iconComponents/LinkedinIcon";
// import Instagram from "../../../iconComponents/InstagramIcon";

function LeftContent() {
	return (
		<div id="leftContent" className={styles.container}>
			<ul>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://github.com/gjro"
					>
						<Github className={styles.githubIcon} />
					</a>
				</li>
				<li>
					<a
						target="_blank"
						rel="noreferrer"
						href="https://www.linkedin.com/in/gjrro/"
					>
						<Linkedin className={styles.linkedinIcon} />
					</a>
				</li>
				<li>
					<a>{/* <Instagram /> */}</a>
				</li>
			</ul>
			<hr id="line" data />
		</div>
	);
}

export default LeftContent;
