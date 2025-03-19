/* eslint-disable react/prop-types */
import styles from "../styles/components/InputField.module.css";
import ErrorFeedback from "./ErrorFeedback";

function InputField({ type, id, labelName, error, ...props }) {
	return (
		<div className={styles.field}>
			<label className={styles.fieldLabel} htmlFor={id}>
				{labelName}
			</label>
			<input type={type} id={id} {...props} />
			{error && <ErrorFeedback error={error} />}
		</div>
	);
}

export default InputField;
