/* eslint-disable react/prop-types */
import { createContext, use, useState } from "react";

const initialValue = {
	formData: {
		avatar: "",
		fullname: "",
		email: "",
		github: "",
		ticketId: "",
		date: "",
	},
	setFormData: () => {},
};

export const FormContext = createContext(initialValue);

export default function FormContextProvider({ children }) {
	const [formData, setFormData] = useState(null);

	const providerValue = { formData, setFormData };
	return (
		<FormContext.Provider value={providerValue}>
			{children}
		</FormContext.Provider>
	);
}

export function useFormContext() {
	const formContext = use(FormContext);
	if (!formContext) {
		throw new Error(
			"useFormContext hook must be used within the <FormContextProvider /> component."
		);
	}
	return formContext;
}
