import React from "react";
import "../styles/Button.scss";
import { createBEMClasses } from "../api/create-bem-classes";
import SmirkingFace from "./SmirkingFace";

interface ButtonProps {
	/** Button text */
	label: string;
	/** Click handler for form submit or action */
	onSubmit: () => void;
	/** Disabled state */
	isDisabled?: boolean;
	/** True if smirking face can be shown */
	canShowSmirkingFace?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	label,
	onSubmit,
	isDisabled = false,
	canShowSmirkingFace = false,
}) => {
	const baseClass = "Button";
	const buttonClass = createBEMClasses(baseClass, undefined, {
		disabled: isDisabled,
	});

	return (
		<button
			type="button"
			className={buttonClass}
			onClick={onSubmit}
			disabled={isDisabled}
		>
			{label}
			{canShowSmirkingFace && <SmirkingFace />}
		</button>
	);
};

export default Button;
