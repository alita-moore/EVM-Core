import React from "react";
import ReactQuill from "react-quill";
import { ScriptProps } from "../../types";

const ScriptInput = (scriptProps: ScriptProps) => {
	const { script, setScript } = scriptProps;
	return <ReactQuill value={script} onChange={setScript} />;
};

export default ScriptInput;
