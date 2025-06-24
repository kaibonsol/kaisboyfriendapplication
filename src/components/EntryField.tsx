import React from "react";
import "../styles/EntryField.scss";
import { createBEMClasses } from "../api/create-bem-classes";

interface EntryFieldProps {
	/** Optional label for the field */
	label?: string;
	/** Controlled value */
	value?: string;
}

const EntryField: React.FC<EntryFieldProps> = ({ label, value }) => {
	// CSS Classes
	const baseClass = "EntryField";
	const labelClass = createBEMClasses(baseClass, "label");
	const inputClass = createBEMClasses(baseClass, "input");

	return (
		<div className={baseClass}>
			{label && <label className={labelClass}>{label}</label>}
			<input className={inputClass} value={value} readOnly />
		</div>
	);
};

export default EntryField;
