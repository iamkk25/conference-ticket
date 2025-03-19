/* eslint-disable react/prop-types */
import styles from "../styles/components/ErrorFeedback.module.css";

function ErrorFeedback({ error }) {
	return (
		<span className={styles.error}>
			<img src="assets/images/icon-info.svg" alt="info icon" />
			{error}
		</span>
	);
}

export default ErrorFeedback;
