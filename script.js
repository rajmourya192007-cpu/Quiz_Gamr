const questions = [
    {
        question:"Which is largest animal in the world?",
        answers: [
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
        ]
    },
    {
        question:"Which is largest animal in the world?",
        answers: [
            {text:"Shark",correct:false},
            {text:"Blue Whale",correct:true},
            {text:"Elephant",correct:false},
            {text:"Giraffe",correct:false},
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