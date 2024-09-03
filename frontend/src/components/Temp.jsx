// src/components/MonacoEditor.jsx
import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const MonacoEditor = () => {
  const [code, setCode] = useState(`
import React from 'react';

const Navbar = () => (
  <nav style={{ padding: '1rem', background: '#282c34', color: 'white' }}>
    <h1>My Navbar</h1>
    <ul style={{ listStyleType: 'none', display: 'flex', gap: '1rem' }}>
      <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Home</a></li>
      <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>About</a></li>
      <li><a href="#" style={{ color: 'white', textDecoration: 'none' }}>Contact</a></li>
    </ul>
  </nav>
);

export default Navbar;
  `);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <Editor
          height="100%"
          defaultLanguage="javascript"
          defaultValue={code}
          onChange={(value) => setCode(value)}
          theme="vs-dark"
        />
      </div>
      <div style={{ flex: 1, padding: '1rem', background: '#f7f7f7' }}>
        <iframe
          title="preview"
          srcDoc={`<html><body>${code}</body></html>`}
          style={{ width: '100%', height: '100%', border: 'none' }}
        />
      </div>
    </div>
  );
};

export default MonacoEditor;
