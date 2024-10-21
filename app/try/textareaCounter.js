"use client"
import React, { useState } from 'react';
import styles from "./try.module.css";
const TextareaCounter = () => {
  const [text, setText] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleTextChange = (event) => {
    const newText = event.target.value;
    const newCharacterCount = newText.length;

    if (newCharacterCount <= 500) {
      setText(newText);
      setCharacterCount(newCharacterCount);
    } else {
      // If the character count exceeds 500, truncate the text
      const truncatedText = newText.substring(0, 499);
      setText(truncatedText);
      setCharacterCount(499);
    }
  };

  return (
    <div>
      <textarea
        className={styles.textarea_try}
        value={text}
        onChange={handleTextChange}
        placeholder="Enter your text..."
        style={{ width: '100%', height: '150px' }}
      />
      <p className={styles.charct_r}>{500 - characterCount}</p>
    </div>
  );
};

export default TextareaCounter;