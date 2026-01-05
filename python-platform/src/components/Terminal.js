import React from 'react';

const Terminal = ({ output, isLoading }) => {
  return (
    <div>
      {isLoading ? 'Loading Pyodide...' : <pre>{output}</pre>}
    </div>
  );
};

export default Terminal;
