import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

const Lesson = () => {
  const [lessonContent, setLessonContent] = useState('');

  useEffect(() => {
    fetch('/lessons/1-variables.md')
      .then((response) => response.text())
      .then((text) => {
        setLessonContent(marked(text));
      });
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: lessonContent }} />;
};

export default Lesson;
