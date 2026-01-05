import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { python } from '@codemirror/lang-python';

const Editor = ({ onRunCode }) => {
  const [code, setCode] = React.useState('print("Hello, world!")');

  const handleRun = () => {
    onRunCode(code);
  };

  return (
    <div>
      <CodeMirror
        value={code}
        height="400px"
        extensions={[python()]}
        onChange={(value) => setCode(value)}
      />
      <button onClick={handleRun}>Run</button>
    </div>
  );
};

export default Editor;
