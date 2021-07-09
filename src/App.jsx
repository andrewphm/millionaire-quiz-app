import Trivia from './components/Trivia'
import { useEffect, useMemo, useState } from "react"
import "./app.css"
import Timer from './components/Timer';

function App() {

  // Use states for question, current prize amount, and if game is over.
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState('$ 0');

  // Array of questions/answers
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
    },
    {
      id: 3,
      question: 'What is the capital city of Spain?',
      answers: [
        {
          text: "Madrid",
          correct: true,
        },
        {
          text: 'Barcelona',
          correct: false,
        },
        {
          text: "Seville",
          correct: false,
        },
        {
          text: "Palma",
          correct: false,
        }
      ]
    },
    {
      id: 4,
      question: 'Which Sesame Street character is also known as The Grouch',
      answers: [
        {
          text: "Elmo",
          correct: false,
        },
        {
          text: 'Big Bird',
          correct: false,
        },
        {
          text: "Oscar",
          correct: true,
        },
        {
          text: "Ernie",
          correct: false,
        }
      ]
    },
    {
      id: 5,
      question: 'What is cancer?',
      answers: [
        {
          text: "Disease of the brain",
          correct: false,
        },
        {
          text: 'Disease of the cells',
          correct: true,
        },
        {
          text: "Disease of the heart",
          correct: false,
        },
        {
          text: "Disease of the lungs",
          correct: false,
        }
      ]
    },
    {
      id: 6,
      question: 'How many provinces are there in Canada?',
      answers: [
        {
          text: "10",
          correct: true,
        },
        {
          text: '9',
          correct: false,
        },
        {
          text: "13",
          correct: false,
        },
        {
          text: "12",
          correct: false,
        }
      ]
    },
    {
      id: 7,
      question: 'Who was the first Prime Minister of Canada?',
      answers: [
        {
          text: "Alexander Mackenzie",
          correct: false,
        },
        {
          text: 'John Abbott',
          correct: false,
        },
        {
          text: "Sir John A. Macdonald",
          correct: true,
        },
        {
          text: "Wilfrid Laurier",
          correct: false,
        }
      ]
    },
    {
      id: 8,
      question: 'Which was the last province to join Canada?',
      answers: [
        {
          text: "Newfoundland",
          correct: true,
        },
        {
          text: 'Quebec',
          correct: false,
        },
        {
          text: "PEI",
          correct: false,
        },
        {
          text: "British Columbia",
          correct: false,
        }
      ]
    },
    {
      id: 9,
      question: 'In the "Road Runner and Coyote" cartoons, what famous sound does the Road Runner make?',
      answers: [
        {
          text: "Ping! Ping!",
          correct: false,
        },
        {
          text: 'Beep! Beep!',
          correct: true,
        },
        {
          text: "Aooga! Aooga!",
          correct: false,
        },
        {
          text: "Vroom! Vroom!",
          correct: false,
        }
      ]
    },
    {
      id: 10,
      question: 'Which zodiac sign is NOT represented by a horned animal?',
      answers: [
        {
          text: "Aries",
          correct: false,
        },
        {
          text: 'Taurus',
          correct: false,
        },
        {
          text: "Capricorn",
          correct: false,
        },
        {
          text: "Virgo",
          correct: true,
        }
      ]
    },
    {
      id: 11,
      question: 'Complete the title of this James Bond film, "The Man With The..."?',
      answers: [
        {
          text: "Golden Eye",
          correct: false,
        },
        {
          text: 'Golden Dog',
          correct: false,
        },
        {
          text: "Golden Gun",
          correct: true,
        },
        {
          text: "Golden Arrow",
          correct: false,
        }
      ]
    },
    {
      id: 12,
      question: 'Ballet originated in which country?',
      answers: [
        {
          text: "Italy",
          correct: true,
        },
        {
          text: 'Brazil',
          correct: false,
        },
        {
          text: "Russia",
          correct: false,
        },
        {
          text: "America",
          correct: false,
        }
      ]
    },
    {
      id: 13,
      question: 'Which country hosted the 1992 Summer Olympics?',
      answers: [
        {
          text: "Spain",
          correct: true,
        },
        {
          text: 'New Zealand',
          correct: false,
        },
        {
          text: "Iceland",
          correct: false,
        },
        {
          text: "England",
          correct: false,
        }
      ]
    },
    {
      id: 14,
      question: 'Which company was founded first?',
      answers: [
        {
          text: "eBay",
          correct: false,
        },
        {
          text: 'Johnson & Johnson',
          correct: true,
        },
        {
          text: "Versace",
          correct: false,
        },
        {
          text: "Starbucks",
          correct: false,
        }
      ]
    },
    {
      id: 15,
      question: 'Which scientific unit is named after an Italian nobleman?',
      answers: [
        {
          text: "Newton",
          correct: false,
        },
        {
          text: 'Decibel',
          correct: false,
        },
        {
          text: "Tesla",
          correct: false,
        },
        {
          text: "Volt",
          correct: true,
        }
      ]
    }
  ]

  // Array for prize amounts
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

  // Render prize amounts. Using CSS to highlight the current amount based on the questionNumber
  const moneyList = moneyPyramid.map(obj => {
    return (
      <li className={questionNumber === obj.id ? "moneyListItem active" : "moneyListItem"}>
      <span className="moneyListItemNumber">{obj.id}</span>
      <span className="moneyListItemAmount">{obj.amount}</span>
    </li>
    )
  })

  // Hook to change the amount earned 
  useEffect(()=> {
    if(questionNumber > 1) {
      setEarned(moneyPyramid.find((element) => element.id === questionNumber - 1).amount);
    }
  },[moneyPyramid, questionNumber])


  return (
    <div className="app">

        {/* Main div holding the timer and question/answers section */}
        <div className="main">
          {stop ? (
             <h1 className="endText">Total Prize Money: {earned}</h1>
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

        {/* Side div holding the money pyramid*/}
        <div className="pyramid">
          <ul className="moneyList">
            {moneyList}
          </ul>
         </div>
    </div>
  );
}

export default App;
