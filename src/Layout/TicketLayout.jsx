import { Navigate } from "react-router";
import Header from "../components/Header";
import Ticket from "../components/Ticket";
import { useFormContext } from "../store/form";

function TicketLayout() {
	const { formData } = useFormContext();
	return (
		<>
			<Header />
			{formData ? <Ticket /> : <Navigate to="/form" />}
		</>
	);
}

export default TicketLayout;
