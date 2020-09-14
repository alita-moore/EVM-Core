import React, { CSSProperties, useState, useRef, useEffect } from "react";
import { ScriptProps } from "../../types";
import { XTerm } from "xterm-for-react";
import { ITerminalOptions } from "xterm";

const TerminalComponent = (scriptProps: ScriptProps) => {
	const { script } = scriptProps;
	const [editing, setEditing] = useState(false);

	const TerminalText = editing ? script : "";

	const RunButton = (
		<button style={styles.buttonStyle} onClick={() => setEditing(!editing)}>
			run code
		</button>
	);

	return (
		<div id="terminal" style={styles.container}>
			{RunButton}
			<XTermInteractive />
		</div>
	);
};

export default TerminalComponent;

const XTermInteractive = () => {
	const xtermRef = useRef(null);
	const [input, setInput] = useState("");

	const options: ITerminalOptions = {
		cursorBlink: true,
	};

	useEffect(() => {
		xtermRef.current.terminal.writeln(
			"Hello, and welcome to Huff Playground"
		);
	}, []);

	const handleKey = (e) => {
		if (e.domEvent.key === "Backspace") {
			setInput(input.slice(0, input.length - 1));
		} else {
			setInput(input + e.key);
		}
		console.log(input);
	};

	return (
		<XTerm
			ref={xtermRef}
			options={options}
			className={"xterm xterm-message"}
			onKey={handleKey}
		/>
	);
};

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
