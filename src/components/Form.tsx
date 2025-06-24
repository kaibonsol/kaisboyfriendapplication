import React from "react";
import "../styles/Form.scss";

interface FormProps {
	/** children should be your EntryField, SelectField, etc. */
	children: React.ReactNode;
}

const Form: React.FC<FormProps> = ({ children }) => {
	return <form className="Form">{children}</form>;
};

export default Form;
