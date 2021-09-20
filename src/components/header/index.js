import styles from "./style.module.scss";
import Logo from "../../iconComponents/LogoIcon";
import { useRef, useState } from "react";

function Header() {
	const [toggle, setToggle] = useState("false");
	const menuContainerRef = useRef(null);
	function handleToggle() {
		menuContainerRef.current.classList.toggle(styles.on, toggle);
		setToggle(!toggle);

		document.body.style.overflow = toggle ? "hidden" : "initial";
	}

	return (
		<header className={styles.headerContainer}>
			<div>
				<a href="#aboutMe">
					<Logo className={styles.logo} />
				</a>
			</div>
			<div ref={menuContainerRef} className={styles.menuContainer}>
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
