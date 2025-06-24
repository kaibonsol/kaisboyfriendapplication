import React from "react";
import "../styles/FreeTextField.scss";
import { createBEMClasses } from "../api/create-bem-classes";

interface FreeTextFieldProps {
	/** Optional label for the field */
	label?: string;
	/** Read-only text content */
	value?: string;
	/** Initial number of rows */
	rows?: number;
}

const FreeTextField: React.FC<FreeTextFieldProps> = ({
	label,
	value = "",
	rows = 3,
}) => {
	const baseClass = "FreeTextField";
	const labelClass = createBEMClasses(baseClass, "label");
	const textareaClass = createBEMClasses(baseClass, "textarea");

	return (
		<div className={baseClass}>
			{label && <label className={labelClass}>{label}</label>}
			<textarea className={textareaClass} value={value} readOnly rows={rows} />
		</div>
	);
};

export default FreeTextField;
