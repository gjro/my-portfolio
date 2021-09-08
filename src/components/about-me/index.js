import styles from "./style.module.scss";
import img from "../../assets/img/img.png";

function AboutMe() {
	return (
		<div className={styles.container}>
			<div className={styles.left}>
				<img draggable="false" src={img} alt="logo" />
			</div>
			<div className={styles.right}>
				<h2 className={styles.subtitle}>About me</h2>
				<hr />
				<p className="shortParagraph">
					loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
					loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
					loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
					loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
					loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
					loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
					loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
					loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
					loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
					loren ipsum loren ipsum loren ipsum loren ipsum loren ipsum
					loren ipsum loren ipsum loren ipsum loren ipsum{" "}
				</p>
			</div>
		</div>
	);
}

export default AboutMe;
