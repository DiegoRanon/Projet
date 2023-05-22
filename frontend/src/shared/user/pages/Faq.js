import React, { useState } from "react";
import ReactDOM from "react-dom";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqItems = [
    {
      question: "Est-ce que le stage est obligatoire?",
      answer:
        "Le stage de fin d'études en informatique est obligatoire pour l'obtention du diplôme collégial.",
    },
    {
      question: "Quel est l'horaire de l'étudiant durant les stages?",
      answer:
        "L'étudiant doit respecter l'horaire de l'entreprise durant son stage.",
    },
    {
      question: "Quel est l'horaire de l'étudiant durant les stages?",
      answer:
        "L'étudiant doit respecter l'horaire de l'entreprise durant son stage.",
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Foire aux questions - FAQ</h1>
        {faqItems.map((item, index) => (
          <div key={index}>
            <button
              className={`collapsible ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleToggle(index)}
            >
              {item.question}
            </button>
            <div
              className={`content ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </header>
    </div>
  );
}

export default Faq;
