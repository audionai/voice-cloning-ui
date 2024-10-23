"use client"
import React, { useState } from 'react';
import styles from "./sound.module.css";

const SoundDropdown = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [showOptions, setShowOptions] = useState(false);

  const sounds = [
    { value: 'en-US', label: 'Beep' },
    { value: 'es-ES', label: 'Bell' },
    { value: 'fr-FR', label: 'Laught' },
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
        className={`${styles.button} ${showOptions ? styles.open : ''}`}
        onClick={toggleOptions}
      >
        {selectedLanguage === 'en-US'
          ? 'none'
          : `${sounds.find((lang) => lang.value === selectedLanguage).label}`}
      </button>
      {showOptions && (
        <ul className={styles.options}>
          {sounds.map((lang, index) => (
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

export default SoundDropdown;
