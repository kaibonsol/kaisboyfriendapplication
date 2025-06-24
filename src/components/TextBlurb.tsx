import React from "react";
import "../styles/TextBlurb.scss";

interface TextBlurbProps {
	/** Paragraph content */
	children: React.ReactNode;
}

const TextBlurb: React.FC<TextBlurbProps> = ({ children }) => {
	return (
		<div className="TextBlurb">
			<p className="TextBlurb__text">{children}</p>
		</div>
	);
};

export default TextBlurb;
