import React, { useState, CSSProperties } from "react";
import ScriptInput from "../../components/ScriptInput";
import Terminal from "../../components/Terminal";
import { ScriptProps } from "../../types";

const ScriptInputScreen = () => {
	const [script, setScript] = useState<string>("");
	const scriptProps: ScriptProps = { script, setScript };

	const _ScriptInput = ScriptInput(scriptProps);
	const _Terminal = Terminal(scriptProps);
	return (
		<div style={styles.container}>
			{_ScriptInput}
			{_Terminal}
		</div>
	);
};

export default ScriptInputScreen;

const styles = {
	container: {
		display: "flex",
		flexDirection: "row",
	} as CSSProperties,
};
