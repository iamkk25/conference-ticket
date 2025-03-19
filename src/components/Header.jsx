import logo from "/assets/images/logo-full.svg";

import styles from "../styles/components/Header.module.css";
import { useFormContext } from "../store/form";

function Header() {
	const { formData } = useFormContext();
	console.log(formData);
	return (
		<header className={styles.header}>
			<img src={logo} alt="coding conf logo" className={styles.headerLogo} />
			<h1 className={styles.headerTitle}>
				{formData ? (
					<>
						Congrats,{" "}
						<span className={styles.customerName}>{formData.fullname}!</span>{" "}
						Your ticket is ready.
					</>
				) : (
					<>Your Journey to Coding Conf 2025 Starts Here!</>
				)}
			</h1>
			<p className={styles.headerText}>
				{formData ? (
					<>
						We&apos;ve emailed your ticket to{" "}
						<span className={styles.customerEmail}>{formData.email}</span> and
						will send updates in the run up to the event.
					</>
				) : (
					<>Secure your spot at next year&apos;s biggest coding conference.</>
				)}
			</p>
		</header>
	);
}

export default Header;
