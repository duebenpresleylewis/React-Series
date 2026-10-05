import React from "react";
import './Accordian.css';

const Accordian = ({ isOpen, onToggle, questionNumber, question, answer }) => {
  return (
    <div>
      <div className="accordianContainer">
        <div className="accordianHeader">
          <h2 className="accordianQuestion">
            {questionNumber}. {question}
          </h2>
          <span
            className={`indicator ${isOpen ? "open" : ""}`}
            onClick={onToggle}
          >
            ^
          </span>
        </div>

        {isOpen && <p className="answerPara">{answer}</p>}
      </div>
    </div>
  );
};

export default Accordian;
