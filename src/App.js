import React, { useEffect, useState } from "react";
import Editor from "./Editor";
import { IoMdCloseCircle } from "react-icons/io";
import "./App.css";

export default function App() {
  const [html, setHtml] = useState("<p> Ujjwal </p>\n<h1> Raj </h1>");
  const [css, setCss] = useState("h1{color:red}\np{font-style:italic}");
  const [js, setJs] = useState('document.body.style.background="cyan"');
  const [loading, setLoading] = useState(true);
  const [srcDoc, setSrcDoc] = useState("");
  const [open, setOpen] = useState(false);
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
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [html, css, js]);
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setOpen(true);
    }, 4000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    !loading && (
      <>
        {open && (
          <div className="popUp">
            <div>
              <IoMdCloseCircle
                className="cutIcon"
                onClick={() => setOpen((prev) => !prev)}
              />
              <h1>Learning in this project</h1>
              <ol>
                <li>
                  Functionality of useState and useEffect hooks with setTimeout.
                </li>
                <li>
                  Understanding of CodeMirror component and their properties
                  that provides code editor in the browser.
                </li>
                <li>Use of react - icons.</li>
                <li>Properties of iframe.</li>
                <li>Responsive nature and popUp.</li>
              </ol>
            </div>
          </div>
        )}

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
