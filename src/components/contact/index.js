import styles from "./style.module.scss";
import User from "../../iconComponents/UserIcon";
import Email from "../../iconComponents/EmailIcon";

function AboutMe() {
	return (
		<div className={styles.contactContainer}>
			<h2 className={styles.subtitle}>Contact</h2>
			<hr />

			<div className={styles.formContainer}>
				<div className={styles.mapContainer}></div>
				<form className={styles.form}>
					<label for="name">Your name</label>
					<br />
					<div className={styles.inputContainer}>
						<div className={styles.iconContainer}>
							<User />
						</div>
						<input type="text" id="name" name="name"></input>
					</div>
					<br />
					<label for="email">Your email</label>
					<br />
					<div className={styles.inputContainer}>
						<div className={styles.iconContainer}>
							<Email />
						</div>
						<input type="email" id="email" name="email"></input>
					</div>
					<br />
					<label for="comments">Comments</label>
					<br />
					<input type="text" id="comments" name="comments"></input>
					<br />
					<input
						className={styles.button}
						type="submit"
						value="Submit"
					></input>
				</form>
			</div>
		</div>
	);
}

export default AboutMe;
