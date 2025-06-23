import { useState, useEffect } from "react";
import Question from "./Question";
import QUESTIONS from "../data/questions.js";

export default function Quiz() {
   const [currentQuestionId, setCurrentQuestionId] = useState("q1");
   const currentQuestion = QUESTIONS.find((q) => q.id === currentQuestionId);   

   return(<div id="quiz">
      <Question question={currentQuestion} />
   </div>);
}