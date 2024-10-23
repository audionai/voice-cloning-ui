'use client';
import React, { useState } from 'react';
import styles from './faq.module.css';

const Faq = () => {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const faqData = [
    {
      question: 'What is test-to-speech (TTS) technology?',
      answer:
        'The purpose of this FAQ is to provide a comprehensive guide for users to understand how to use our product/service.',
    },
    {
      question: 'How to translate Voice',
      answer:
        'To reset your password, please follow these steps: [insert instructions here].',
    },
    {
      question: 'What is voice cutting AI',
      answer:
        'The system requirements for our product/service are as follows: [insert system requirements here].',
    },
  ];

  const toggleExpand = (index: number) => {
    setExpanded({ ...expanded, [index]: !expanded[index] });
  };

  return (
    <div className={styles.faq}>
      <p className={styles.faq_nam}>FAQs</p>
      {faqData.map((item, index) => (
        <div key={index} className={styles.faq_top}>
          <div className={styles.faq_question}>
            <h5 className={styles.faq_line}>{item.question}</h5>
            <i
              onClick={() => toggleExpand(index)}
              className={styles.plus_icon}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.75 6C12.75 5.58579 12.4142 5.25 12 5.25C11.5858 5.25 11.25 5.58579 11.25 6H12.75ZM11.25 18C11.25 18.4142 11.5858 18.75 12 18.75C12.4142 18.75 12.75 18.4142 12.75 18H11.25ZM18 12.75C18.4142 12.75 18.75 12.4142 18.75 12C18.75 11.5858 18.4142 11.25 18 11.25V12.75ZM6 11.25C5.58579 11.25 5.25 11.5858 5.25 12C5.25 12.4142 5.58579 12.75 6 12.75L6 11.25ZM11.25 6V18H12.75V6H11.25ZM18 11.25L6 11.25L6 12.75L18 12.75V11.25Z"
                  fill="rgb(var(--color))"
                />
              </svg>
            </i>
          </div>
          {expanded[index] && (
            <p
              dangerouslySetInnerHTML={{ __html: item.answer }}
              className={styles.faq_answer}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Faq;
