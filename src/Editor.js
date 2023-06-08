import React, { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";
// import {MdCloseFullscreen , MdOpenInFull} from react-icons;
import { MdCloseFullscreen, MdOpenInFull } from "react-icons/md";

import { Controlled as ControlledEditor } from "react-codemirror2";
export default function Editor({ title, lang, onChange, value }) {
  const [open, setOpen] = useState(true);
  const handleChange = (editor, data, value) => {
    onChange(value);
  };
  return (
    <div className={`editor-container ${open ? "" : "collapsed"} `}>
      <div className="editor-title">
        <p>{title}</p>
        <button onClick={() => setOpen((prev) => !prev)}>
          {open ? <MdCloseFullscreen /> : <MdOpenInFull />}{" "}
        </button>
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: lang,
          theme: "material",
          lineNumbers: true,
        }}
      />
    </div>
  );
}
