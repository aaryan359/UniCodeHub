import React, { useState } from 'react';
import * as monaco from 'monaco-editor';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  // Initialize the Monaco editor
  React.useEffect(() => {
    const editor = monaco.editor.create(document.getElementById('editor'), {
      value: code,
      language: 'javascript', 
      theme: 'vs-dark',
      automaticLayout: true
    });

    // Capture the code written by the user
    editor.onDidChangeModelContent(() => {
      setCode(editor.getValue());
    });

    return () => {
      editor.dispose();
    };
  }, []);

  // Function to send code to the backend for execution
  const runCode = async () => {
    const response = await fetch('/api/users/editor', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code })
    });
    const result = await response.json();
    alert(result.output); 
  };

  return (
    <div>
      <div id="editor" style={{ height: '500px', width: '100%' }}></div>
      <button onClick={runCode}>Run Code</button>
    </div>
  );
};

export default CodeEditor;
