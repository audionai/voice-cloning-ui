"use client"

import React, { useState } from 'react';
import styles from "./characterDropdown.module.css"

const CharacterDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = 
useState('en-US');
  const [showOptions, setShowOptions] = 
useState(false);

  const characters = [
    { value: 'en-US', label: 'milla' },
    { value: 'es-ES', label: 'lama' },
    { value: 'fr-FR', label: 'oqe' },
    // Add more language options as needed
  ];

  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className={styles.dropdown}>
      <button
        className={`${styles.button} ${showOptions ? styles.open :       
''}`}
        onClick={toggleOptions}
      >
        {selectedLanguage === 'en-US'
          ? 'koko'
          : `${characters.find((lang) => lang.value === 
selectedLanguage).label}`}
      </button>
      {showOptions && (
        <ul className={styles.options}>
          {characters.map((lang, index) => (
            <li key={index} className={styles.drop_}>
              <button
                onClick={() => {
                  handleLanguageChange(lang.value);
                  toggleOptions();
                }}
              >
                {lang.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CharacterDropdown;