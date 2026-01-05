import React, { useState } from 'react';
import './App.css';
import Editor from './components/Editor';
import Lesson from './components/Lesson';
import Navbar from './components/Navbar';
import Terminal from './components/Terminal';
import usePyodide from './hooks/usePyodide';

function App() {
  const { runPython, isLoading } = usePyodide();
  const [output, setOutput] = useState('');

  const handleRunCode = async (code) => {
    const result = await runPython(code);
    setOutput(result);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <div className="lesson-pane">
          <Lesson />
        </div>
        <div className="editor-pane">
          <div className="editor-container">
            <Editor onRunCode={handleRunCode} />
          </div>
          <div className="terminal-container">
            <Terminal output={output} isLoading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
