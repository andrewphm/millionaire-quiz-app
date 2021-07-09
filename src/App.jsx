import Trivia from './components/Trivia'
import { useEffect, useMemo, useState } from "react"
import "./app.css"
import Timer from './components/Timer';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('$ 0');

  const data = [
    {
      id: 1,
      question: 'Rolex is a company that specializes in what type of products?',
      answers: [
        {
          text: "Phones",
          correct: false,
          id: 1,
        },
        {
          text: 'Watches',
          correct: true,
          id: 2,
        },
        {
          text: "Clothing",
          correct: false,
          id: 3,
        },
        {
          text: "Cars",
          correct: false,
          id: 4,
        }
      ]
    },
    {
      id: 2,
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

  const moneyPyramid = useMemo(() => 
    [
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
    ].reverse(),
  [])

  const moneyList = moneyPyramid.map(obj => {
    return (
      <li className={questionNumber === obj.id ? "moneyListItem active" : "moneyListItem"}>
      <span className="moneyListItemNumber">{obj.id}</span>
      <span className="moneyListItemAmount">{obj.amount}</span>
    </li>
    )
  })

  //Hook to change the amount earned
  useEffect(()=> {
    if(questionNumber > 1) {
      setEarned(moneyPyramid.find((element) => element.id === questionNumber - 1).amount);
    }
  },[moneyPyramid, questionNumber])


  return (
    <div className="app">
      <div className="main">
        {stop ? (
          <h1 className="endText">You earned: {earned}</h1>
        ) : (
         <> 
          <div className="main__top">
            <div className="timer">
              <Timer setStop={setStop} questionNumber={questionNumber}/>
            </div>
          </div>

          <div className="main__bottom">
           <Trivia 
             data={data} 
             setStop={setStop}
             questionNumber={questionNumber} 
             setQuestionNumber={setQuestionNumber}
           />
          </div>
         </> 
        )}
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {moneyList}
        </ul>
      </div>

    </div>
  );
}

export default App;
