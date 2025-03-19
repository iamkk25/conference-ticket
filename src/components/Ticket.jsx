import styles from "../styles/components/Ticket.module.css";
import { useFormContext } from "../store/form";
import { useNavigate } from "react-router";

function Ticket() {
	const { formData, setFormData } = useFormContext();
	const navigate = useNavigate();

	function handleClick() {
		navigate("/");
		setFormData(null);
	}

	console.log(formData);
	return (
		<div className={styles.ticketContainer}>
			<div className={styles.ticketDetailsContainer}>
				<div className={styles.confDetails}>
					<div className={styles.confIconContainer}>
						<img
							className={styles.confIcon}
							src="/assets/images/logo-mark.svg"
							alt="coding conf icon"
						/>
					</div>
					<div>
						<h2>Coding Conf</h2>
						<p className={styles.confPlace}>Jan 31, 2025 / Austin, TX</p>
					</div>
				</div>
				<div className={styles.customerDetails}>
					<div className={styles.customerProfileContainer}>
						<img
							className={styles.customerProfile}
							src={formData.avatar}
							alt={`${formData.fullname}'s picture`}
						/>
					</div>
					<div>
						<h2 className={styles.customerName}>{formData.fullname}</h2>
						<p className={styles.githubUsername}>
							<img
								className={styles.githubIcon}
								src="/assets/images/icon-github.svg"
								alt="github icon"
							/>
							{formData.github}
						</p>
					</div>
				</div>

				<p className={styles.ticketNumber}>#{formData.ticketId}</p>
			</div>
			<button className={styles.getTicketBtn} onClick={handleClick}>
				Get another ticket
			</button>
		</div>
	);
}

export default Ticket;
