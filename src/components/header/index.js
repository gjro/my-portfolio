import "./style.scss";

import "../../assets/img/logo.png";

function Header() {
	return (
		<header>
			<img src="../../assets/img/logo.png" alt="logo" />
			<nav className="menu">
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
						<a className="heading-14 contact" href="#">
							Contact
						</a>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
