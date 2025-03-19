/* eslint-disable react/prop-types */
import { useRef } from "react";
import styles from "../styles/components/FileUploader.module.css";
import { validFileSize } from "../utils/validateFile";
import ErrorFeedback from "./ErrorFeedback";

function FileUploader({ imgFile, onFileUpload, defaulValue, error }) {
	const fileInputRef = useRef();

	let imgSrc;
	if (imgFile) {
		imgSrc = URL.createObjectURL(imgFile);
	}

	function handleDragOver(e) {
		e.preventDefault();
		e.stopPropagation();
	}

	function handleDrop(e) {
		e.preventDefault();
		e.stopPropagation();
		const img = e.dataTransfer.files[0];
		if (!img) {
			fileInputRef.current.blur();
			return;
		}
		if (!validFileSize(img)) {
			console.error("file must be under 500kb");
		}
		onFileUpload(img);
		fileInputRef.current.blur();
	}

	function handleChange(e) {
		const img = e.target.files[0];
		if (!img) {
			console.warn("no files selected");
			return;
		}
		if (!validFileSize(img)) {
			console.error("file must be under 500kb");
		}
		onFileUpload(img);
	}

	function handleRemoveImage(e) {
		e.preventDefault();
		console.log("remove image");
		onFileUpload(null);
	}

	function hanldeChangeImage(e) {
		e.preventDefault();
		console.log("change image");
		fileInputRef.current.click();
	}
	return (
		<div className={styles.field}>
			<label className={styles.fieldLabel} htmlFor="file-upload">
				Upload Avatar
			</label>
			<label
				className={styles.fileUploadContainer}
				htmlFor="file-upload"
				onDragOver={handleDragOver}
				onDrop={handleDrop}
			>
				<div className={styles.fileUploadIcon}>
					{imgFile ? (
						<img
							className={styles.previewImg}
							width={50}
							height={50}
							src={defaulValue || `${imgSrc}`}
							alt={imgFile.name}
						/>
					) : (
						<img
							className={styles.fileUploadIconImage}
							src="assets/images/icon-upload.svg"
							alt="upload icon"
						/>
					)}
				</div>
				<input
					ref={fileInputRef}
					className={styles.fileUploadInput}
					type="file"
					id="file-upload"
					name="avatar"
					onChange={handleChange}
					accept="image/jpg,image/jpeg,image/png"
				/>
				{imgFile ? (
					<div className={styles.imageActions}>
						<button onClick={handleRemoveImage}>Remove image</button>
						<button onClick={hanldeChangeImage}>Change image</button>
					</div>
				) : (
					<p>Drag and drop or click to upload</p>
				)}
			</label>
			{error ? (
				<ErrorFeedback error={error} />
			) : (
				<span className={styles.infoText}>
					<img src="assets/images/icon-info.svg" alt="info icon" />
					Upload your photo (JPG or PNG, max size: 500KB).
				</span>
			)}
		</div>
	);
}

export default FileUploader;
