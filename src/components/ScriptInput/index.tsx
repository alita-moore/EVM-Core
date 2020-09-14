import React from "react";
import AceEditor from "react-ace";
import { ScriptProps } from "../../types";

const ScriptInput = (scriptProps: ScriptProps) => {
	const { script, setScript } = scriptProps;

	return (
		<div>
			<AceEditor mode="javascript" theme="github" onChange={setScript} />
		</div>
	);
};

export default ScriptInput;

const styles = {
	input: {
		height: "auto",
	},
};
