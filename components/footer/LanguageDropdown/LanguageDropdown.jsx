"use client"

import React, { useState } from 'react';
import styles from "./languageDropdown.module.css"

const LanguageDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = 
useState('en-US');
  const [showOptions, setShowOptions] = 
useState(false);

  const languages = [
    { value: 'en-US', label: 'English (US)' },
    { value: 'es-ES', label: 'Español' },
    { value: 'fr-FR', label: 'Français' },
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
          ? 'English (US)'
          : `${languages.find((lang) => lang.value === 
selectedLanguage).label}`}
      </button>
      {showOptions && (
        <ul className={styles.options}>
          {languages.map((lang, index) => (
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

export default LanguageDropdown;