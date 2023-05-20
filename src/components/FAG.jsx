import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { useState } from "react";

const FAG = ({ question, answer }) => {
  const [isAnswerShowing, setIsAnswerShowing] = useState(false)
  return (
    <article  className="faq" onClick={()=>setIsAnswerShowing(prev => !prev)}>
      <div key={question.id}>
        <h4>{question}</h4>
        <button className="faq-icon">
         {
          isAnswerShowing ? <AiOutlineMinus/>:  <AiOutlinePlus />
         }
        </button>
      </div>
     {isAnswerShowing &&  <p className="faq-paragraph">{answer}</p>}
    </article>
  );
};

export default FAG;
