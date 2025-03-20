import { useActionState, useState } from "react";
import styles from "../styles/components/Form.module.css";
import FileUploader from "./FileUploader";
import InputField from "./InputField";
import {
	isNotEmpty,
	validEmail,
	validFileSize,
	validGithubName,
} from "../utils/validateFile";
import { useNavigate } from "react-router";
import { useFormContext } from "../store/form";
import { formatDate, ticketIdGenerator } from "../utils/utility";

function Form() {
	const [imgFile, setImgFile] = useState(null);
	const [fileSizeError, setFileSizeError] = useState("");
	const navigate = useNavigate();
	const { setFormData } = useFormContext();

	function onFileUpload(file) {
		if (file === null || (file && validFileSize(file))) {
			setFileSizeError("");
		}

		if (file && !validFileSize(file)) {
			console.log(file);
			setFileSizeError("File too large. Please upload a photo under 500KB.");
		}
		console.log(file);
		setImgFile(file);
	}

	function formAction(prevData, formData) {
		const userData = Object.fromEntries(formData.entries());
		// Error validation
		const errors = {};

		if (!validFileSize(imgFile)) {
			errors.avatar = "File too large. Please upload a photo under 500KB.";
		}

		if (!imgFile || imgFile.size === 0) {
			errors.avatar = "Please upload a file.";
		}

		if (!isNotEmpty(userData.fullname)) {
			errors.fullname = "Please enter a valid full name!";
		}

		if (!validEmail(userData.email)) {
			errors.email = "Please enter a valid email address.";
		}

		if (!validGithubName(userData.github)) {
			errors.github = "Please enter valid github name.";
		}

		if (!imgFile || imgFile?.size === 0 || imgFile?.name === "") {
			userData.avatar = "";
		} else {
			userData.avatar = URL.createObjectURL(imgFile);
		}

		if (errors?.avatar || errors?.fullname || errors?.email || errors?.github) {
			console.log("throwing error...");
			return { errors, userData };
		}

		console.log("sending credentials...");
		// navigate("/ticket", { state: { userData } });
		setFormData({
			...userData,
			ticketId: ticketIdGenerator(),
			date: formatDate(new Date()),
		});
		navigate("/ticket");

		// return { errors, userData };
	}

	const [actionState, submitAction] = useActionState(formAction, {
		errors: {},
		userData: {},
	});

	console.log(actionState);

	return (
		<form className={styles.form} action={submitAction}>
			<FileUploader
				imgFile={imgFile}
				onFileUpload={onFileUpload}
				defaultValue={actionState.userData?.avatar}
				error={actionState.errors?.avatar || fileSizeError}
			/>
			<InputField
				id="fullname"
				type="text"
				labelName="Full Name"
				name="fullname"
				defaultValue={actionState.userData?.fullname}
				error={actionState.errors?.fullname}
			/>
			<InputField
				id="email"
				type="email"
				labelName="Email Address"
				name="email"
				placeholder="example@example.com"
				defaultValue={actionState.userData?.email}
				error={actionState.errors?.email}
			/>
			<InputField
				id="github"
				type="text"
				labelName="Github Username"
				name="github"
				placeholder="@yourusername"
				defaultValue={actionState.userData?.github}
				error={actionState.errors?.github}
			/>
			<div>
				<button to="ticket" className={styles.ticketGenerateBtn}>
					Generate My Ticket
				</button>
			</div>
		</form>
	);
}

export default Form;
