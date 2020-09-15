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

	const options: ITerminalOptions = {
		cursorBlink: true,
	};

	useEffect(() => {
		xtermRef.current.terminal.write(
			"\n Hello, and welcome to Huff Playground \r\n \t version 1.0 \r\n\r\n (jsx) $ "
		);
	}, []);

	const handleKey = (e: { key; domEvent }) => {
		const key = e.key;
		const ev = e.domEvent;

		if (ev.key === "Backspace") {
			xtermRef.current.terminal.write("\b \b");
		} else if (ev.key === "Enter") {
			xtermRef.current.terminal.write("\r\n (jsx) $ ");
		} else {
			xtermRef.current.terminal.write(key);
		}
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
