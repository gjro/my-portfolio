import styles from "./style.module.scss";
import logo from "../../assets/img/logo.png";

function Header() {
	return (
		<header className={styles.headerContainer}>
			<a href="">
				<img className={styles.logo} src={logo} alt="logo" />
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
