import { useState, useCallback } from "react";
import Confetti from "react-confetti";
import { Fireworks } from "@fireworks-js/react";
import "../styles/FormContainer.scss";
import EntryField from "./EntryField";
import Form from "./Form";
import Checkbox from "./Checkbox";
import OptionList from "./OptionList";
import HeadingLine from "./HeadingLine";
import TextBlurb from "./TextBlurb";
import Break from "./Break";
import SmirkingFace from "./SmirkingFace";
import FreeTextField from "./FreeTextField";
import Button from "./Button";
import { createBEMClasses } from "../api/create-bem-classes";

export default function FormContainer() {
	// State
	const [submitted, setSubmitted] = useState(false);

	// Callbacks
	const handleYes = useCallback(() => {
		setSubmitted(true);
	}, [setSubmitted]);

	return (
		<div
			className={createBEMClasses("FormContainer", undefined, {
				exploded: submitted,
			})}
		>
			{submitted && (
				<>
					<Confetti frameRate={50} />
					<Fireworks
						options={{
							acceleration: 1.05,
							friction: 0.97,
							gravity: 1.5,
							particles: 100,
							explosion: 5,
						}}
						style={{
							position: "absolute",
							top: 0,
							left: 0,
							width: "100%",
							height: "100%",
							pointerEvents: "none",
						}}
					/>
					<h1>Ayeeeeeee let's fucking goooooooooo</h1>
					<h1>that was easy!</h1>
					<SmirkingFace />
				</>
			)}
			{!submitted && (
				<>
					<h1>Kai's Boyfriend Application</h1>
					<Form>
						<TextBlurb>
							uhhh I (Kai) am wondering if you (Ashley) would like to be my
							(his) girlfriend
							<SmirkingFace />
						</TextBlurb>
						<HeadingLine title="Applicant Details" />
						<EntryField label="First Name" value="Kai" />
						<EntryField label="Last Name" value="Bonsol" />
						<EntryField label="Age" value="24" />
						<Break />
						<Checkbox label="Is US Citizen?" checked />
						<Checkbox label="Does Taxes on Time?" checked />
						<Checkbox label="Is Freak?" checked canShowSmirkingFace />
						<Checkbox label="Is Always Down?" checked />
						<Checkbox label="No, Like, ALWAYS Down?" checked />
						<Checkbox label="Is Ever Not Down?" />
						<Break />
						<OptionList
							options={["Single", "Married", "Divorced"]}
							selection="Single"
							label="Marital Status"
						/>
						<OptionList
							options={["Poor", "Good", "Great"]}
							selection="Great"
							label="Credit Score"
						/>
						<OptionList
							options={["0", "1", "2", "3", "4+"]}
							selection="0"
							label="Felonies"
						/>
						<Break />
						<FreeTextField
							value="I am free any time you text, at a moments notice, at ANY place or time. Just lemme knowww I'll be on my way!"
							label="What does your availability look like?"
							rows={5}
						/>
						<HeadingLine title="Why Kai (me) Wants to Date Ashley (you)" />

						<Checkbox label="I am literally your biggest fan" checked />
						<Checkbox label="I adore you to MARS and back" checked />
						<Checkbox label="Your joke structure is goated" checked />
						<Checkbox label="You be making me laugh" checked />
						<Checkbox label="I love your face" checked />
						<Checkbox
							label="Freak mode is always on"
							checked
							canShowSmirkingFace
						/>

						<HeadingLine title="Why Ashley (you) Should Date Kai (me)" />

						<Checkbox label="I am so clean" checked />
						<Checkbox label="I can share my luck with you" checked />
						<Checkbox label="I know all the good food spots" checked />
						<Checkbox label="I be making you laugh" checked />
						<Checkbox label="I am kinda decent at street fighter" checked />
						<Checkbox
							label="Freak mode is always on"
							checked
							canShowSmirkingFace
						/>

						<HeadingLine title="Other Questions" />

						<FreeTextField
							value="Food, the moon, needles, airports, hikes, benches, (me??)"
							label="What does Ashley (you) love?"
						/>
						<TextBlurb>
							(I can take you to a lot of food spots, airports, hikes, n
							benches... i'd give you the moon if i could... needles is all you
							idk how to help with that)
						</TextBlurb>

						<FreeTextField
							value="10 mile hike (with schmoke breaks) around Gibraltar n then Dottys"
							label="Perfect date?"
						/>
						<TextBlurb>
							(But honestly any date is perfect if you're there)
						</TextBlurb>

						<FreeTextField
							value="idkkk you should say yes it would be kinda a vibeee"
							label="Anything else you (Kai) would like Ashley (you) to know?"
						/>

						<HeadingLine title="Contact Information" />

						<EntryField label="Phone Number" value="you already have it" />
						<EntryField label="Email" value="you already have it" />
						<EntryField label="Beer Buddy" value="you already have it" />
						<Break />

						<HeadingLine title="So, what do you say?" />
						<Button label="Yes" onSubmit={handleYes} canShowSmirkingFace />
						<Button
							label="No (this button doesn't work)"
							onSubmit={() => {}}
							isDisabled
						/>
					</Form>
				</>
			)}
		</div>
	);
}
