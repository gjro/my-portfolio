import styles from "./style.module.scss";
import Logo from "../../iconComponents/LogoIcon";

function Header() {
	return (
		<header className={styles.headerContainer}>
			<a href="#aboutMe">
				<Logo className={styles.logo} />
			</a>
			<nav className={styles.menu}>
				<ul>
					<li>
						<a href="#aboutMe">About me</a>
					</li>
					<li>
						<a href="#projects">Projects</a>
					</li>
					<li>
						<a href="#skills">Skills</a>
					</li>
					<li>
						<a className={styles.contact} href="#contact">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
