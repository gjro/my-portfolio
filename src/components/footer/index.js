import styles from "./style.module.scss";
import Logo from "../../iconComponents/LogoIcon";
import Heart from "../../iconComponents/HeartIcon";
import Github from "../../iconComponents/GithubIcon";
import Linkedin from "../../iconComponents/LinkedinIcon";

export default function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<p>Developed with a lot of</p>
			<Heart className={styles.heartIcon} />
			<p>by</p>
			<Logo className={styles.logoIcon} />

			<a target="_blank" rel="noreferrer" href="https://github.com/gjro">
				<Github className={styles.githubIcon} />
			</a>

			<a
				target="_blank"
				rel="noreferrer"
				href="https://www.linkedin.com/in/gjrro/"
			>
				<Linkedin className={styles.linkedinIcon} />
			</a>
		</footer>
	);
}
