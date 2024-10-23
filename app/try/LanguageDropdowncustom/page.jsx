"use client"

import React, { useState } from 'react';
import styles from "./languageDropdown.module.css"

const LanguageDropdowncustom = () => {
  const [selectedLanguage, setSelectedLanguage] = 
useState('en-US');
  const [showOptions, setShowOptions] = 
useState(false);

  const languages = [
    { value: 'en-US', label: 'English (US)', img: '<svg viewBox="0 0 7410 3900"><path fill="#b22234" d="M0 0h7410v3900H0z"/><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300"/><path fill="#3c3b6e" d="M0 0h2964v2100H0z"/><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z"/><use xlink:href="#a" y="420"/><use xlink:href="#a" y="840"/><use xlink:href="#a" y="1260"/></g><use xlink:href="#a" y="1680"/></g><use xlink:href="#b" x="247" y="210"/></g><use xlink:href="#c" x="494"/></g><use xlink:href="#d" x="988"/><use xlink:href="#c" x="1976"/><use xlink:href="#e" x="2470"/></g></svg>'},
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
                {lang.img}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdowncustom;
