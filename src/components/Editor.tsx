import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
type EditorProps = {
  displayName: string;
  language: string;
  value: string;
  onChange: (value: string) => void;
};

export default function Editor({
  displayName,
  language,
  value,
  onChange,
}: EditorProps) {
  const [open, setOpen] = useState(true);

  return (
    <div className={`editor-container ${open ? "" : "collapsed"}`}>
      <div className="editor-title">
        {displayName}
        <button
          type="button"
          className="expand-collapse-btn"
          onClick={() => setOpen((prevOpen) => !prevOpen)}
        >
          <FontAwesomeIcon icon={open ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <CodeMirror
        className="code-mirror-wrapper"
        value={value}
        height="50vh"
        theme={vscodeDark}
        lang={language}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </div>
  );
}
