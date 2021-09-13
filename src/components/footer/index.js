import styles from "./style.module.scss";
import Logo from "../../iconComponents/LogoIcon";
import Linkedin from "../../iconComponents/LinkedinIcon";
import Heart from "../../iconComponents/HeartIcon";
import Github from "../../iconComponents/GithubIcon";

export default function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<p>Developed with a lot of</p>
			<Heart className={styles.heartIcon} />
			<p>by</p>
			<Logo className={styles.logoIcon} />

			<Github className={styles.githubIcon} />
			<Linkedin className={styles.linkedinIcon} />
		</footer>
	);
}
