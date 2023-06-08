import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import "./App.css";

export default function App() {
  const [html, setHtml] = useState("<p> Ujjwal </p><h1> Raj </h1>");
  const [css, setCss] = useState("h1{color:red}p{font-style:italic}");
  const [js, setJs] = useState('document.body.style.background="cyan"');
  const [loading, setLoading] = useState(true);
  const [srcDoc, setSrcDoc] = useState("");

  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 1500);
  }
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setSrcDoc(
        ` <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>`
      );
    }, 100);

    return () => clearTimeout(timeOut);
  }, [html, css, js]);

  return (
    !loading && (
      <>
        <div className="pane top-pane">
          <Editor title="HTML" lang="xml" value={html} onChange={setHtml} />
          <Editor title="CSS" lang="css" value={css} onChange={setCss} />
          <Editor title="JS" lang="javascript" value={js} onChange={setJs} />
        </div>
        <div className="pane">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts"
            frameBorder={0}
            width="100%"
            height="100%"
          />
        </div>
      </>
    )
  );
}
