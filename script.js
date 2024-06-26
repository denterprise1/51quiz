const quizData = [
    {
        question: "Who was the first Indian cricketer to score a triple century in Test cricket?",
        options: ["Sunil Gavaskar", "Rahul Dravid", "Virender Sehwag", "Sachin Tendulkar"],
        correct: "Virender Sehwag"
    },
    {
        question: "Which Indian badminton player won the silver medal at the 2016 Rio Olympics?",
        options: ["P.V. Sindhu", "Saina Nehwal", "Kidambi Srikanth", "Parupalli Kashyap"],
        correct: "P.V. Sindhu"
    },
    {
        question: "Who was the first Indian woman to win an Olympic medal?",
        options: ["Sakshi Malik", "Saina Nehwal", "P.T. Usha", "Karnam Malleswari"],
        correct: "Karnam Malleswari"
    },
    {
        question: "Which Indian cricketer is known as the 'Little Master'?",
        options: ["Sunil Gavaskar", "Sachin Tendulkar", "Rahul Dravid", "Virat Kohli"],
        correct: "Sunil Gavaskar"
    },
    {
        question: "In which year did India win its first Cricket World Cup?",
        options: ["1983", "1975", "1992", "2007"],
        correct: "1983"
    },
    {
        question: "Which Indian sprinter is nicknamed the 'Payyoli Express'?",
        options: ["P.T. Usha", "Hima Das", "Milkha Singh", "Dutee Chand"],
        correct: "P.T. Usha"
    },
    {
        question: "Which Indian athlete won the gold medal in the javelin throw at the 2020 Tokyo Olympics?",
        options: ["Neeraj Chopra", "Anju Bobby George", "Milkha Singh", "Hima Das"],
        correct: "Neeraj Chopra"
    },
    {
        question: "Which Indian boxer won a gold medal at the 2008 Beijing Olympics?",
        options: ["Vijender Singh", "Mary Kom", "Manoj Kumar", "Amit Panghal"],
        correct: "Vijender Singh"
    },
    {
        question: "Who was the captain of the Indian cricket team that won the ICC T20 World Cup in 2007?",
        options: ["Rahul Dravid", "Sachin Tendulkar", "MS Dhoni", "Sourav Ganguly"],
        correct: "MS Dhoni"
    },
    {
        question: "Which Indian tennis player won the French Open mixed doubles title in 2017?",
        options: ["Leander Paes", "Mahesh Bhupathi", "Sania Mirza", "Rohan Bopanna"],
        correct: "Rohan Bopanna"
    },
    {
        question: "Who was the first Indian woman to reach the finals of an Olympic event?",
        options: ["Sakshi Malik", "P.T. Usha", "Saina Nehwal", "Anju Bobby George"],
        correct: "P.T. Usha"
    },
    {
        question: "Which Indian footballer was awarded the Arjuna Award in 2020?",
        options: ["Sunil Chhetri", "Baichung Bhutia", "Gurpreet Singh Sandhu", "Sunita Lakra"],
        correct: "Sunil Chhetri"
    }
];

let currentQuestionIndex = 0;

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    quizContainer.innerHTML = '';

    const questionData = quizData[currentQuestionIndex];
    const questionElement = document.createElement('h2');
    questionElement.textContent = questionData.question;
    quizContainer.appendChild(questionElement);

    questionData.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(optionElement, option);
        quizContainer.appendChild(optionElement);
    });
}

function checkAnswer(optionElement, selectedOption) {
    const questionData = quizData[currentQuestionIndex];
    const correctAnswer = questionData.correct;

    if (selectedOption === correctAnswer) {
        optionElement.classList.add('correct');
    } else {
        optionElement.classList.add('wrong');
    }

    document.querySelectorAll('.option').forEach(option => {
        option.onclick = null;
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        }
    });

    document.getElementById('next').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuiz();
        document.getElementById('next').disabled = true;
    } else {
        document.getElementById('quiz').innerHTML = '<h2>Quiz Completed!</h2>';
    
        document.getElementById('next').style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    loadQuiz();
    document.getElementById('next').disabled = true;
});
