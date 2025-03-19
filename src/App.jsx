import { createBrowserRouter, Navigate, RouterProvider } from "react-router";

import Form from "./components/Form";
import RootLayout from "./Layout/RootLayout";

import "./App.css";
import TicketLayout from "./Layout/TicketLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <Navigate to="form" replace />,
			},
			{
				path: "form",
				element: <Form />,
			},
		],
	},
	{
		path: "ticket",
		element: <TicketLayout />,
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
