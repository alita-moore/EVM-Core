import React, { CSSProperties, useState } from "react";

const Terminal = () => {
	const [editing, setEditing] = useState(false);

	const TerminalText = editing ? (
		<span>apples are the best flavor</span>
	) : null;

	return (
		<div style={styles.container}>
			<button
                style={styles.buttonStyle}
				onClick={() => setEditing(!editing)}
			>run code</button>
			{TerminalText}
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
