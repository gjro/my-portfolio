import styles from "./style.module.scss";
import archive from "../../../assets/img/archive-icon.png";
import github from "../../../assets/img/github-icon.svg";
import extern from "../../../assets/img/extern-icon.svg";
function Card(props) {
	return (
		<div className={styles.card}>
			<div className={styles.icons}>
				<div>
					<img src={archive} alt="archive-icon" />
				</div>
				<div>
					<img
						className={styles.icon}
						src={github}
						alt="github-icon"
					/>
					<img
						className={styles.icon}
						src={extern}
						alt="extern-icon"
					/>
				</div>
			</div>
			<div className={styles.body}>
				<h3>{props.title}</h3>
				<p>{props.body}</p>
			</div>
			<div className={styles.footer}>
				<span>{props.tec1}</span>
				<span>{props.tec2}</span>
				<span>{props.tec3}</span>
			</div>
		</div>
	);
}

export default Card;
