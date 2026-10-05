import { useState } from "react";
import "./App.css";
import Accordian from "./components/Accordian";
import Header from "./components/Header";

import { questions } from "./utility/data.js";

function App() {
  const [openIndex, setOpenIndex] = useState(null);
  const [multiSelect, setMultiSelect] = useState(false);

  return (
    <div className="App">
      <Header title="My Accordian" />

      <button
        className={`multi-select-btn ${multiSelect ? "multi-select" : ""}`}
        onClick={() => setMultiSelect((prev) => !prev)}
      >
        Multi-Selection
      </button>

      {questions.map((question, index) => (
        <Accordian
          key={question.id}
          isOpen={multiSelect ? openIndex === index : openIndex === index}
          onToggle={() => setOpenIndex((prev) => (prev === index ? null : index))}
          questionNumber={index + 1}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
  );
}

export default App;
