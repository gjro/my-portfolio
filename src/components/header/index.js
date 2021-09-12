import styles from "./style.module.scss";
import Logo from "../../iconComponents/LogoIcon";

function Header() {
	return (
		<header className={styles.headerContainer}>
			<a href="">
				<Logo className={styles.logo} />
			</a>
			<nav className={styles.menu}>
				<ul>
					<li>
						<a href="#">About me</a>
					</li>
					<li>
						<a href="#">Projects</a>
					</li>
					<li>
						<a href="#">Skills</a>
					</li>
					<li>
						<a className={styles.contact} href="#">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
