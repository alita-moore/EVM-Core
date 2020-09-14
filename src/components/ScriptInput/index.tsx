import React from "react";
import AceEditor from "react-ace";
import { ScriptProps } from "../../types";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";

const ScriptInput = (scriptProps: ScriptProps) => {
	const { script, setScript } = scriptProps;

	return (
		<div>
			<AceEditor
				placeholder="Placeholder Text"
				mode="javascript"
				theme="monokai"
				name="input script"
				onChange={setScript}
				fontSize={13}
				showPrintMargin={true}
				showGutter={true}
				highlightActiveLine={true}
				value={script}
				setOptions={{
					enableBasicAutocompletion: false,
					enableLiveAutocompletion: false,
					enableSnippets: false,
					showLineNumbers: true,
					tabSize: 4,
				}}
				style={styles.input}
			/>
		</div>
	);
};

export default ScriptInput;

const styles = {
	input: {
		height: "95vh",
		width: "35vw",
	},
};
