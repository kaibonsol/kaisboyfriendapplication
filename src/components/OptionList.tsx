import React from "react";
import "../styles/OptionList.scss";
import { createBEMClasses } from "../api/create-bem-classes";

interface OptionListProps {
	/** Optional label for the option list */
	label?: string;
	/** Array of option labels */
	options: string[];
	/** Currently selected option */
	selection?: string;
}

const OptionList: React.FC<OptionListProps> = ({
	label,
	options,
	selection,
}) => {
	const baseClass = "OptionList";

	return (
		<div className={baseClass}>
			{label && (
				<div className={createBEMClasses(baseClass, "label")}>{label}</div>
			)}
			<div className={createBEMClasses(baseClass, "buttons")}>
				{options.map((option) => {
					const buttonClass = createBEMClasses(baseClass, "button", {
						selected: option === selection,
					});
					return (
						<button key={option} className={buttonClass} disabled>
							{option}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default OptionList;
