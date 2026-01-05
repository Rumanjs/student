import { useState, useEffect } from 'react';

const usePyodide = () => {
  const [pyodide, setPyodide] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPyodide = async () => {
      const pyodideModule = await window.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.4/full/',
      });
      setPyodide(pyodideModule);
      setIsLoading(false);
    };
    loadPyodide();
  }, []);

  const runPython = async (code) => {
    if (!pyodide) {
      return 'Pyodide is not ready yet.';
    }
    try {
      return await pyodide.runPythonAsync(code);
    } catch (error) {
      return error.toString();
    }
  };

  return { runPython, isLoading };
};

export default usePyodide;
