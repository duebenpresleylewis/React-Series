import { useState } from "react";
import "./App.css";
import Accordian from "./components/Accordian";
import Header from "./components/Header";

import { questions } from "./utility/data.js";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header title="My Accordian" />

      {questions.map((question, index) => (
        <Accordian
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          key={question.id}
          questionNumber={index + 1}
          question={question.question}
          answer={question.answer}
        />
      ))}


      {}
    </div>
  );
}

export default App;
