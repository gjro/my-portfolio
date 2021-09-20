import styles from "./style.module.scss";
import Logo from "../../iconComponents/LogoIcon";
import { useRef } from "react";

function Header() {
	const menuContainerRef = useRef(null);
	function handleToggle() {
		menuContainerRef.current.classList.toggle(styles.on);
	}

	return (
		<header className={styles.headerContainer}>
			<div>
				<a href="#aboutMe">
					<Logo className={styles.logo} />
				</a>
			</div>
			<div
				ref={menuContainerRef}
				className={`${styles.menuContainer} ${styles.on}`}
			>
				<div onClick={handleToggle} className={styles.menuToggle}>
					<div className={styles.row1}></div>
					<div className={styles.row2}></div>
					<div className={styles.row3}></div>
				</div>
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
			</div>
		</header>
	);
}

export default Header;
