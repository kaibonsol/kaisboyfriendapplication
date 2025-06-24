import React from "react";
import "../styles/HeadingLine.scss";

interface HeadingLineProps {
	/** The section title to display */
	title: string;
}

const HeadingLine: React.FC<HeadingLineProps> = ({ title }) => {
	return (
		<div className="HeadingLine">
			<h2 className="HeadingLine__title">{title}</h2>
			<div className="HeadingLine__line" />
		</div>
	);
};

export default HeadingLine;
