import React from "react";
import "../styles/Checkbox.scss";
import { createBEMClasses } from "../api/create-bem-classes";
import SmirkingFace from "./SmirkingFace";

interface CheckboxProps {
	/** Text to display next to the box */
	label?: string;
	/** Whether the box is checked */
	checked?: boolean;
	/** Whether the smirking face can show */
	canShowSmirkingFace?: boolean;
}

const Checkbox: React.FC<CheckboxProps> = ({
	label,
	checked = false,
	canShowSmirkingFace = false,
}) => {
	const baseClass = "Checkbox";
	const inputClass = createBEMClasses(baseClass, "input");
	const labelClass = createBEMClasses(baseClass, "label");

	return (
		<div className={baseClass}>
			<label className={labelClass}>
				<input
					type="checkbox"
					className={inputClass}
					checked={checked}
					disabled
				/>
				{label}
				{canShowSmirkingFace && <SmirkingFace />}
			</label>
		</div>
	);
};

export default Checkbox;
