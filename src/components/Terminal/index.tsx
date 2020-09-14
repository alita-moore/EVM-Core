import React, { CSSProperties, useState } from "react";
import { ScriptProps } from "../../types";

const Terminal = (scriptProps: ScriptProps) => {
	const { script } = scriptProps;
	const [editing, setEditing] = useState(false);

	const TerminalText = editing ? script : "";

	return (
		<div style={styles.container}>
			<button
				style={styles.buttonStyle}
				onClick={() => setEditing(!editing)}
			>
				run code
			</button>
			<text>{TerminalText}</text>
		</div>
	);
};

export default Terminal;

const styles = {
	container: {
		display: "flex",
		alignItems: "center",
		flexDirection: "column",
		width: "100%",
	} as CSSProperties,
	buttonStyle: {
		margin: "15px",
		alignSelf: "center",
		width: "auto",
		height: "auto",
	} as CSSProperties,
	text: {
		margin: "auto",
		alignSelf: "center",
		textAlign: "center",
	} as CSSProperties,
};
