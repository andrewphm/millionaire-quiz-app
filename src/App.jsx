import Trivia from './components/Trivia'
import { useState } from "react"
import "./app.css"

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);

  const data = [
    {
      id: 1,
      question: 'Rolex is a compnay that specializes in what type of products?',
      answers: [
        {
          text: "Phones",
          correct: false,
        },
        {
          text: 'Watches',
          correct: true,
        },
        {
          text: "Clothing",
          correct: false,
        },
        {
          text: "Cars",
          correct: false,
        }
      ]
    },
    {
      id: 1,
      question: 'In what country is the famous car brand Honda from?',
      answers: [
        {
          text: "Japan",
          correct: true,
        },
        {
          text: 'Korea',
          correct: false,
        },
        {
          text: "Germany",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        }
      ]
    }
  ]

  const moneyPyramid = [
    { id: 1, amount: "$ 100" },
    { id: 2, amount: "$ 200" },
    { id: 3, amount: "$ 300" },
    { id: 4, amount: "$ 500" },
    { id: 5, amount: "$ 1,000" },
    { id: 6, amount: "$ 2,000" },
    { id: 7, amount: "$ 4,000" },
    { id: 8, amount: "$ 8,000" },
    { id: 9, amount: "$ 16,000" },
    { id: 10, amount: "$ 32,000" },
    { id: 11, amount: "$ 64,000" },
    { id: 12, amount: "$ 125,000" },
    { id: 13, amount: "$ 250,000" },
    { id: 14, amount: "$ 500,000" },
    { id: 15, amount: "$ 1,000,000" },
  ]
  const moneyList = moneyPyramid.map(obj => {
    return (
      <li className={questionNumber === obj.id ? "moneyListItem active" : "moneyListItem"}>
      <span className="moneyListItemNumber">{obj.id}</span>
      <span className="moneyListItemAmount">{obj.amount}</span>
    </li>
    )
  })

  console.log(moneyList)

  return (
    <div className="app">
      <div className="main">

        <div className="main__top">
          <div className="timer">30</div>
        </div>

        <div className="main__bottom">
          <Trivia 
          data={data} 
          setTimeOut={setTimeOut}
          questionNumber={questionNumber} 
          setQuestionNumber={setQuestionNumber}
          />
        </div>
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {moneyList.reverse()}
        </ul>
      </div>

    </div>
  );
}

export default App;
