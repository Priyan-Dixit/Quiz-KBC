(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],[,,,,function(e,t,a){e.exports=a.p+"static/media/play.3d8ba0a6.mp3"},function(e,t,a){e.exports=a.p+"static/media/correct.d27f45ad.mp3"},function(e,t,a){e.exports=a.p+"static/media/wrong.e55862ad.mp3"},function(e,t,a){e.exports=a(17)},,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(3),i=a.n(c),o=(a(16),a(1)),s=a(4),u=a.n(s),l=a(5),m=a.n(l),d=a(6),h=a.n(d);function x(e){let{data:t,setStop:a,questionNumber:c,setQuestionNumber:i}=e;const[s,l]=Object(r.useState)(null),[d,x]=Object(r.useState)(null),[w,f]=Object(r.useState)("answer"),[p]=Object(o.a)(u.a),[b]=Object(o.a)(m.a),[g]=Object(o.a)(h.a);Object(r.useEffect)(()=>{p()},[p]),Object(r.useEffect)(()=>{l(t[c-1])},[t,c]);const E=(e,t)=>{setTimeout(()=>{t()},e)};return n.a.createElement("div",{className:"trivia"},n.a.createElement("div",{className:"question"},null===s||void 0===s?void 0:s.question),n.a.createElement("div",{className:"answers"},null===s||void 0===s?void 0:s.answer.map(e=>n.a.createElement("div",{className:d===e?w:"answer",onClick:()=>(e=>{x(e),f("answer active"),E(2e3,()=>f(e.correct?"answer correct":"answer wrong")),E(5e3,()=>{e.correct?(b(),E(3e3,()=>{i(e=>e+1),x(null)})):(g(),E(1e3,()=>{a(!0)}))})})(e)},e.text))))}function w(e){let{setStop:t,questionNumber:a}=e;const[n,c]=Object(r.useState)(30);return Object(r.useEffect)(()=>{if(0===n)return t(!0);const e=setInterval(()=>{c(e=>e-1)},1e3);return()=>clearInterval(e)},[t,n]),Object(r.useEffect)(()=>{c(30)},[a]),n}function f(e){let{setUsername:t}=e;const a=Object(r.useRef)();return n.a.createElement("div",{className:"start"},n.a.createElement("input",{placeholder:"Enter you name",className:"startInput",ref:a}),n.a.createElement("button",{className:"startButton",onClick:()=>{a.current.value&&t(a.current.value)}},"Start"))}var p=function(){const[e,t]=Object(r.useState)(null),[a,c]=Object(r.useState)(1),[i,o]=Object(r.useState)(!1),[s,u]=Object(r.useState)("Rs. 0"),l=Object(r.useMemo)(()=>[{id:1,amount:"Rs. 1000"},{id:2,amount:"Rs. 2000"},{id:3,amount:"Rs. 3000"},{id:4,amount:"Rs. 5000"},{id:5,amount:"Rs. 10,000"},{id:6,amount:"Rs. 20,000"},{id:7,amount:"Rs. 40,000"},{id:8,amount:"Rs. 80,000"},{id:9,amount:"Rs. 1,60,000"},{id:10,amount:"Rs. 3,20,000"},{id:11,amount:"Rs. 6,40,000"},{id:12,amount:"Rs. 12,50,000"},{id:13,amount:"Rs. 25,00,000"},{id:14,amount:"Rs. 50,00,000"},{id:15,amount:"1 Crore"}].reverse(),[]);return Object(r.useEffect)(()=>{a>1&&u(l.find(e=>e.id===a-1).amount)},[l,a]),n.a.createElement("div",{className:"app"},e?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"main"},i?n.a.createElement("h1",{className:"endText"},"You earned: ",s):n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"top"},n.a.createElement("div",{className:"timer"},n.a.createElement(w,{setStop:o,questionNumber:a}))),n.a.createElement("div",{className:"bottom"},n.a.createElement(x,{data:[{id:1,question:"Who is the current Railway Minister of India?",answer:[{text:"Mamta Banerji",correct:!1},{text:"Ram Vilash",correct:!1},{text:"Ashwini Vaishnaw",correct:!0},{text:"Piyush Goyal",correct:!1}]},{id:2,question:'Which god is also known as "Gauri Nandan"?',answer:[{text:"Agni",correct:!1},{text:"Indra",correct:!1},{text:"Hanuman",correct:!1},{text:"Ganesha",correct:!0}]},{id:3,question:"What does not grow on tree according to a popular Hindi saying?",answer:[{text:"Money",correct:!0},{text:"Flowers",correct:!1},{text:"Leaves",correct:!1},{text:"Fruits",correct:!0}]},{id:4,question:"Which city is known as Pink City in India?",answer:[{text:"Banglore",correct:!1},{text:"Mysore",correct:!1},{text:"Jaipur",correct:!0},{text:"Kochi",correct:!1}]},{id:5,question:"How many religions are there in India?",answer:[{text:"6",correct:!0},{text:"7",correct:!1},{text:"8",correct:!1},{text:"9",correct:!1}]},{id:6,question:"When is the National Hindi Diwas celebrated?",answer:[{text:"13 September",correct:!1},{text:"14 September",correct:!0},{text:"14 July",correct:!1},{text:"15 August",correct:!1}]},{id:7,question:"Which one of the following places is famous for the Great Vishnu Temple?",answer:[{text:"Bordubar, Indonesia",correct:!1},{text:"Bamiyan, Afghanistan",correct:!1},{text:"Panja Sahib, Pakistan",correct:!1},{text:"Ankorvat, Cambodia",correct:!0}]},{id:8,question:"The largest Buddhist Monastery in India is located at",answer:[{text:"Sarnath, Uttar Pradesh",correct:!1},{text:"Tawang, Arunachal Pradesh",correct:!0},{text:"Dharmashala, Himachal Pradesh",correct:!1},{text:"Gangtok, Sikkim",correct:!1}]},{id:9,question:"Which of the following musical instruments is NOT of foreign origin?",answer:[{text:"Tabla",correct:!1},{text:"Flute",correct:!0},{text:"Sitar",correct:!1},{text:"Violin",correct:!1}]},{id:10,question:"Who among the following was killed during 'Operation Bluestar' of 1984?",answer:[{text:"Baba Santa Singh",correct:!1},{text:"Haji Mastan",correct:!1},{text:"Jarnail Singh Bhindrawale",correct:!0},{text:"Homi Jehangir Bhabha",correct:!1}]},{id:11,question:"Who is the founder of the political party Dravida Munnetra Kazhagam (DMK)?",answer:[{text:"C.N. Annadurai",correct:!0},{text:"M. Karunanidhi",correct:!1},{text:"M.G. Ramachandran",correct:!1},{text:"Jayalalitha",correct:!1}]},{id:12,question:"Who was the first Indian woman to win a medal in the Olympics?",answer:[{text:"P.T. Usha",correct:!1},{text:"Kunjarani Devi",correct:!1},{text:"Bachendri Pal",correct:!1},{text:"Karnam Maleshwari",correct:!0}]},{id:13,question:"Which Mughal Emperor was deported to Rangoon by the British?",answer:[{text:"Shah Jahan",correct:!1},{text:"Bahadur Shah II",correct:!0},{text:"Akbar Shah I",correct:!1},{text:"Bahadur Shah I",correct:!1}]},{id:14,question:"Who among the following is said to have witnessed the reigns of eight Delhi Sultans?",answer:[{text:"Minhaj-us-Siraj",correct:!1},{text:"Ziauddin Barani",correct:!1},{text:"Amir Khusro",correct:!0},{text:"Shams-i-Siraj Afif",correct:!1}]},{id:15,question:'Which city is known as the "Silicon Valley Of India"?',answer:[{text:"Delhi",correct:!1},{text:"Mumbai",correct:!1},{text:"Chennai",correct:!1},{text:"Banglore",correct:!0}]}],setStop:o,questionNumber:a,setQuestionNumber:c}))," ")),n.a.createElement("div",{className:"pyramid"},n.a.createElement("ul",{className:"moneyList"},l.map(e=>n.a.createElement("li",{className:a===e.id?"moneyListItem active":"moneyListItem"},n.a.createElement("span",{className:"moneyListItemNumber"},e.id),n.a.createElement("span",{className:"moneyListItemAmount"},e.amount)))))):n.a.createElement(f,{setUsername:t}))};i.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(p,null)))}],[[7,1,2]]]);
//# sourceMappingURL=main.09d779ae.chunk.js.map