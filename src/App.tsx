import { useState, useEffect } from "react";
import Editor from "./components/Editor";
import "./index.css";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
  const [html, setHTML] = useLocalStorage("html", "");
  const [css, setcss] = useLocalStorage("css", "");
  const [js, setjs] = useLocalStorage("js", "");
  const [sourceDoc, setSourceDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSourceDoc(`
      <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      </html>
      `);
    }, 250);
    return () => clearTimeout(timeout);
  }),
    [html, css, js];

  return (
    <>
      <div className="pane top-pane">
        <Editor
          displayName="HTML"
          language="xml"
          value={html}
          onChange={setHTML}
        />
        <Editor
          displayName="CSS"
          language="css"
          value={css}
          onChange={setcss}
        />
        <Editor
          displayName="JS"
          language="javascript"
          value={js}
          onChange={setjs}
        />
      </div>
      <div className="pane">
        <iframe
          title="Output"
          srcDoc={sourceDoc}
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
