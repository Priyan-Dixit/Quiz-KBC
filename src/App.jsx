import React, {useState, useEffect, useMemo} from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";



function App() {
  const [username, setUsername]= useState(null);
  const [questionNumber,setQuestionNumber]=useState(1);
  const [stop, setStop]=useState(false);
  const [earned, setEarned]=useState("Rs. 0");
  const data=[
    {
    id: 1,
    question: "Who is the current Railway Minister of India?",
    answer: [
      {
      text: "Mamta Banerji",
      correct: false
      },
      {
        text: "Ram Vilash",
        correct: false
      },
      {
        text: "Ashwini Vaishnaw",
        correct: true
      },
      {
        text: "Piyush Goyal",
        correct: false
      }
    ]
  },
  {
    id: 2,
    question: 'Which god is also known as "Gauri Nandan"?',
    answer: [
      {
      text: "Agni",
      correct: false
      },
      {
        text: "Indra",
        correct: false
      },
      {
        text: "Hanuman",
        correct: false
      },
      {
        text: "Ganesha",
        correct: true
      }
    ]
  },
  {
    id: 3,
    question: "What does not grow on tree according to a popular Hindi saying?",
    answer: [
      {
      text: "Money",
      correct: true
      },
      {
        text: "Flowers",
        correct: false
      },
      {
        text: "Leaves",
        correct: false
      },
      {
        text: "Fruits",
        correct: true
      }
    ]
  },
  {
    id: 4,
    question: "Which city is known as Pink City in India?",
    answer: [
      {
      text: "Banglore",
      correct: false
      },
      {
        text: "Mysore",
        correct: false
      },
      {
        text: "Jaipur",
        correct: true
      },
      {
        text: "Kochi",
        correct: false
      }
    ]
  },
  {
    id: 5,
    question: "How many religions are there in India?",
    answer: [
      {
      text: "6",
      correct: true
      },
      {
        text: "7",
        correct: false
      },
      {
        text: "8",
        correct: false
      },
      {
        text: "9",
        correct: false
      }
    ]
  },
  {
    id: 6,
    question: "When is the National Hindi Diwas celebrated?",
    answer: [
      {
      text: "13 September",
      correct: false
      },
      {
        text: "14 September",
        correct: true
      },
      {
        text: "14 July",
        correct: false
      },
      {
        text: "15 August",
        correct: false
      }
    ]
  },
  {
    id: 7,
    question: "Which one of the following places is famous for the Great Vishnu Temple?",
    answer: [
      {
      text: "Bordubar, Indonesia",
      correct: false
      },
      {
        text: "Bamiyan, Afghanistan",
        correct: false
      },
      {
        text: "Panja Sahib, Pakistan",
        correct: false
      },
      {
        text: "Ankorvat, Cambodia",
        correct: true
      }
    ]
  },
  {
    id: 8,
    question: "The largest Buddhist Monastery in India is located at",
    answer: [
      {
      text: "Sarnath, Uttar Pradesh",
      correct: false
      },
      {
        text: "Tawang, Arunachal Pradesh",
        correct: true
      },
      {
        text: "Dharmashala, Himachal Pradesh",
        correct: false
      },
      {
        text: "Gangtok, Sikkim",
        correct: false
      }
    ]
  },
  {
    id: 9,
    question: "Which of the following musical instruments is NOT of foreign origin?",
    answer: [
      {
      text: "Tabla",
      correct: false
      },
      {
        text: "Flute",
        correct: true
      },
      {
        text: "Sitar",
        correct: false
      },
      {
        text: "Violin",
        correct: false
      }
    ]
  },
  {
    id: 10,
    question: "Who among the following was killed during 'Operation Bluestar' of 1984?",
    answer: [
      {
      text: "Baba Santa Singh",
      correct: false
      },
      {
        text: "Haji Mastan",
        correct: false
      },
      {
        text: "Jarnail Singh Bhindrawale",
        correct: true
      },
      {
        text: "Homi Jehangir Bhabha",
        correct: false
      }
    ]
  },
  {
    id: 11,
    question: "Who is the founder of the political party Dravida Munnetra Kazhagam (DMK)?",
    answer: [
      {
      text: "C.N. Annadurai",
      correct: true
      },
      {
        text: "M. Karunanidhi",
        correct: false
      },
      {
        text: "M.G. Ramachandran",
        correct: false
      },
      {
        text: "Jayalalitha",
        correct: false
      }
    ]
  },
  {
    id: 12,
    question: "Who was the first Indian woman to win a medal in the Olympics?",
    answer: [
      {
      text: "P.T. Usha",
      correct: false
      },
      {
        text: "Kunjarani Devi",
        correct: false
      },
      {
        text: "Bachendri Pal",
        correct: false
      },
      {
        text: "Karnam Maleshwari",
        correct: true
      }
    ]
  },
  {
    id: 13,
    question: "Which Mughal Emperor was deported to Rangoon by the British?",
    answer: [
      {
      text: "Shah Jahan",
      correct: false
      },
      {
        text: "Bahadur Shah II",
        correct: true
      },
      {
        text: "Akbar Shah I",
        correct: false
      },
      {
        text: "Bahadur Shah I",
        correct: false
      }
    ]
  },
  {
    id: 14,
    question: "Who among the following is said to have witnessed the reigns of eight Delhi Sultans?",
    answer: [
      {
      text: "Minhaj-us-Siraj",
      correct: false
      },
      {
        text: "Ziauddin Barani",
        correct: false
      },
      {
        text: "Amir Khusro",
        correct: true
      },
      {
        text: "Shams-i-Siraj Afif",
        correct: false
      }
    ]
  },
  {
    id: 15,
    question: 'Which city is known as the "Silicon Valley Of India"?',
    answer: [
      {
      text: "Delhi",
      correct: false
      },
      {
        text: "Mumbai",
        correct: false
      },
      {
        text: "Chennai",
        correct: false
      },
      {
        text: "Banglore",
        correct: true
      }
    ]
  },
 ]
  const moneyPyramid= useMemo(() => 
    [
    {id:1, amount:"Rs. 1000"},
    {id:2, amount:"Rs. 2000"},
    {id:3, amount:"Rs. 3000"},
    {id:4, amount:"Rs. 5000"},
    {id:5, amount:"Rs. 10,000"},
    {id:6, amount:"Rs. 20,000"},
    {id:7, amount:"Rs. 40,000"},
    {id:8, amount:"Rs. 80,000"},
    {id:9, amount:"Rs. 1,60,000"},
    {id:10, amount:"Rs. 3,20,000"},
    {id:11, amount:"Rs. 6,40,000"},
    {id:12, amount:"Rs. 12,50,000"},
    {id:13, amount:"Rs. 25,00,000"},
    {id:14, amount:"Rs. 50,00,000"},
    {id:15, amount:"1 Crore"},
  ].reverse(),
   []);
    
  
  useEffect(()=>{
    questionNumber>1 && setEarned(moneyPyramid.find((m)=> m.id === questionNumber - 1).amount);
  },[moneyPyramid,questionNumber]);
  
  return (
    <div className="app">
      {username ? (
        <>
        <div className="main">
        {stop ? <h1 className="endText">You earned: {earned}</h1>: (
        <>
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber}/>
            </div>
        </div>
        <div className="bottom">
          <Trivia
          data={data}
          setStop={setStop}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          />
        </div> </> )}
      </div>
      <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map((m)=>(
      <li className={questionNumber===m.id ? "moneyListItem active" : "moneyListItem"}>
        <span className="moneyListItemNumber">{m.id}</span>
        <span className="moneyListItemAmount">{m.amount}</span>
      </li>
        ))}
      </ul>
      </div>
        </>
      ) : <Start setUsername={setUsername}/>}
      
    </div>
  );
}

export default App;
