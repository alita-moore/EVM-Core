import React, { CSSProperties, useState } from "react";
import { ScriptProps } from "../../types";
import { XTerm } from "xterm-for-react";

const TerminalComponent = (scriptProps: ScriptProps) => {
	const { script } = scriptProps;
	const [editing, setEditing] = useState(false);

	const TerminalText = editing ? script : "";
	// const terminal = new Terminal();
	// const fitAddon = new FitAddon();
	// terminal.loadAddon(fitAddon);
	// terminal.open(document.getElementById("terminal"));

	return (
		<div id="terminal" style={styles.container}>
			<button
				style={styles.buttonStyle}
				onClick={() => setEditing(!editing)}
			>
				run code
			</button>
			<text>{TerminalText}</text>
			<XTerm />
		</div>
	);
};

export default TerminalComponent;

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
