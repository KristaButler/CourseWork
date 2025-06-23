import Answer from "./Answer";

function shuffleArray(array) {
  const arr = array.slice(); // Create a copy to avoid mutating original
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  return arr;
}

export default function Question({question}) {
   const shuffledAnswers = shuffleArray(question.answers);
console.log(shuffledAnswers)
   return (
      <div id="question">
         <progress />
         <h2>{question.text}</h2>
         <ul id="answers">
            {shuffledAnswers.map((answer, index) => (
               <Answer key={`a${index}`} text={answer} />
            ))}
         </ul>
      </div>
   );
}