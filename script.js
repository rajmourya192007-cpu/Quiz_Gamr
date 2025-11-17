const questions = [
  {
    question:"Which is the largest desert in the world?",
    answers: [
        {text:"Sahara Desert", correct:false},
        {text:"Antarctic Desert", correct:true},
        {text:"Gobi Desert", correct:false},
        {text:"Arctic Desert", correct:false},
    ]
},
{
    question:"Which planet is known as the Red Planet?",
    answers: [
        {text:"Earth", correct:false},
        {text:"Mars", correct:true},
        {text:"Jupiter", correct:false},
        {text:"Venus", correct:false},
    ]
},
{
    question:"Which gas do plants absorb from the atmosphere?",
    answers: [
        {text:"Oxygen", correct:false},
        {text:"Carbon Dioxide", correct:true},
        {text:"Nitrogen", correct:false},
        {text:"Hydrogen", correct:false},
    ]
},
{
    question:"What is the capital of France?",
    answers: [
        {text:"Berlin", correct:false},
        {text:"Paris", correct:true},
        {text:"Madrid", correct:false},
        {text:"Rome", correct:false},
    ]
},
{
    question:"Who invented the light bulb?",
    answers: [
        {text:"Nikola Tesla", correct:false},
        {text:"Thomas Edison", correct:true},
        {text:"Albert Einstein", correct:false},
        {text:"Isaac Newton", correct:false},
    ]
},
{
    question:"Which is the fastest land animal?",
    answers: [
        {text:"Leopard", correct:false},
        {text:"Cheetah", correct:true},
        {text:"Lion", correct:false},
        {text:"Tiger", correct:false},
    ]
},
{
    question:"Which is the smallest continent in the world?",
    answers: [
        {text:"Europe", correct:false},
        {text:"Australia", correct:true},
        {text:"Africa", correct:false},
        {text:"South America", correct:false},
    ]
},
{
    question:"What is the boiling point of water?",
    answers: [
        {text:"50°C", correct:false},
        {text:"100°C", correct:true},
        {text:"150°C", correct:false},
        {text:"200°C", correct:false},
    ]
},
{
    question:"Which organ pumps blood in the human body?",
    answers: [
        {text:"Liver", correct:false},
        {text:"Heart", correct:true},
        {text:"Lungs", correct:false},
        {text:"Kidneys", correct:false},
    ]
},
{
    question:"Which is the longest river in the world?",
    answers: [
        {text:"Amazon River", correct:false},
        {text:"Nile River", correct:true},
        {text:"Ganga River", correct:false},
        {text:"Yangtze River", correct:false},
    ]
},

];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionInex = 0;
let score = 0;

function startQuiz(){
    currentQuestionInex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetstate();
    let currentQuestion= questions[currentQuestionInex];
    let questionNo = currentQuestionInex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(ansewr => {
        const button = document.createElement("button");
        button.innerHTML = ansewr.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(ansewr.correct){
            button.dataset.correct = ansewr.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetstate(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionInex < questions.length){
    handleNextButton();
    }else{
        startQuiz();
    }
});

function showScore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block"
}

function handleNextButton(){
    currentQuestionInex++;
    if(currentQuestionInex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}


startQuiz();
