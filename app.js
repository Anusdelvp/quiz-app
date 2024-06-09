const container = document.querySelector(".container");
const questionbox = document.querySelector(".question");
const choicesbox = document.querySelector(".choices");
const nextBtn = document.querySelector(".nextBtn");

const quiz =[
 { question:"which of the foollowing is not a css box model property?",
  choices:["margin","padding","border-radius","border-collapse"],
  answer: "border-collapse"
},
 { question:"how many provinces in pakistan?",
  choices:["two","four","nine","six"],
  answer: "four"
},
{ question:"which of the foollowing is not a css box model property?",
  choices:["margin","padding","border-radius","border-collapse"],
  answer: "border-collapse"
},

{ question:"which of the foollowing is not a css box model property?",
  choices:["margin","padding","border-radius","border-collapse"],
  answer: "border-collapse"
},

];
let currentquestionindex = 0;
const showquestion = ()=>{
  // console.log('question');
  const questiondetails =quiz [currentquestionindex];
  questionbox.textContent=questiondetails.question;
  
  choicesbox.textContent = "";
  for (let i=0; i < questiondetails.choices.length; i++) {
    const currentchoice = questiondetails.choices[i];
    const choicediv = document.createElement('div')
    choicediv.textContent = currentchoice;
    choicediv.classList.add("choice")
    choicesbox.appendChild(choicediv);


    choicediv.addEventListener("click", ()=>{
      if(choicediv.classList.contains("selected")){
        choicediv.classList.remove("selected");

      }else{
        choicediv.classList.add("selected")
      }
    })


  }

}
const checkanswer =()=>{
  const selectedchoice =  document.querySelector('.choice.selected')
  if(selectedchoice.textContent===quiz[currentquestionindex].answer){
    alert('correct answer');

  }else{
    alert("wrong answer")
  }
  // console.log(selectedchoice);
}

showquestion();
nextBtn.addEventListener('click',()=>{
  checkanswer();
if(currentquestionindex < quiz.length){
currentquestionindex++;
showquestion();

}
});

