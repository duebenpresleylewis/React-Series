import React from "react";
import './Accordian.css' 
const Accordian = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <div className="accordianContainer">
        <div className="accordianHeader">
          <h2 className="accordianQuestion">
            {props.questionNumber}. {props.question}
          </h2>
          <span className="indicator" onClick={() => setIsOpen(!isOpen)}>
            ^
          </span>
        </div>

        {isOpen && <p className="answerPara">{props.answer}</p>}
      </div>
    </div>
  );
};

export default Accordian;
