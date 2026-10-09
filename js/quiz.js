checkAuth();


const quizDatabase = {
    mathematics: {
        title: "Mathematics Quiz",
        subject: "Mathematics",
        icon: "fas fa-calculator",
        color: "#EC4899",
        timePerQuestion: 45,
        questions: [
            {
                question: "What is the value of π (pi) rounded to two decimal places?",
                options: ["3.12", "3.14", "3.16", "3.18"],
                correctAnswer: 1
            },
            {
                question: "Solve: 15 + 23 × 2 = ?",
                options: ["76", "61", "53", "46"],
                correctAnswer: 1
            },
            {
                question: "What is the square root of 144?",
                options: ["10", "11", "12", "13"],
                correctAnswer: 2
            },
            {
                question: "If a triangle has angles of 60°, 60°, and 60°, what type of triangle is it?",
                options: ["Scalene", "Isosceles", "Equilateral", "Right"],
                correctAnswer: 2
            },
            {
                question: "What is 25% of 200?",
                options: ["25", "50", "75", "100"],
                correctAnswer: 1
            },
            {
                question: "Solve: 3x + 5 = 20. What is x?",
                options: ["3", "4", "5", "6"],
                correctAnswer: 2
            },
            {
                question: "What is the area of a rectangle with length 8 and width 5?",
                options: ["13", "26", "40", "45"],
                correctAnswer: 2
            },
            {
                question: "Which number is prime?",
                options: ["15", "21", "23", "27"],
                correctAnswer: 2
            },
            {
                question: "What is 7² (7 squared)?",
                options: ["14", "42", "49", "56"],
                correctAnswer: 2
            },
            {
                question: "Convert 0.75 to a fraction in simplest form:",
                options: ["1/2", "2/3", "3/4", "4/5"],
                correctAnswer: 2
            }
        ]
    },
    history: {
        title: "World History Quiz",
        subject: "History",
        icon: "fas fa-landmark",
        color: "#8B5CF6",
        timePerQuestion: 45,
        questions: [
            {
                question: "In which year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correctAnswer: 2
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Thomas Jefferson", "George Washington", "John Adams", "Benjamin Franklin"],
                correctAnswer: 1
            },
            {
                question: "The Great Wall of China was built primarily to protect against invasions from which direction?",
                options: ["South", "East", "West", "North"],
                correctAnswer: 3
            },
            {
                question: "Which ancient civilization built the pyramids?",
                options: ["Romans", "Greeks", "Egyptians", "Persians"],
                correctAnswer: 2
            },
            {
                question: "What year did Christopher Columbus first reach the Americas?",
                options: ["1492", "1498", "1502", "1510"],
                correctAnswer: 0
            },
            {
                question: "Who wrote the Declaration of Independence?",
                options: ["George Washington", "Benjamin Franklin", "John Adams", "Thomas Jefferson"],
                correctAnswer: 3
            },
            {
                question: "The Renaissance began in which country?",
                options: ["France", "Italy", "Spain", "England"],
                correctAnswer: 1
            },
            {
                question: "What was the name of the ship on which the Pilgrims traveled to America?",
                options: ["Santa Maria", "Mayflower", "Victoria", "Nina"],
                correctAnswer: 1
            },
            {
                question: "Who was the first person to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "Yuri Gagarin", "John Glenn"],
                correctAnswer: 1
            },
            {
                question: "The French Revolution began in which year?",
                options: ["1776", "1789", "1799", "1804"],
                correctAnswer: 1
            }
        ]
    },
    science: {
        title: "General Science Quiz",
        subject: "Science",
        icon: "fas fa-flask",
        color: "#10B981",
        timePerQuestion: 45,
        questions: [
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "O2", "NaCl"],
                correctAnswer: 0
            },
            {
                question: "How many planets are in our solar system?",
                options: ["7", "8", "9", "10"],
                correctAnswer: 1
            },
            {
                question: "What is the speed of light?",
                options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
                correctAnswer: 0
            },
            {
                question: "What is the largest organ in the human body?",
                options: ["Heart", "Brain", "Liver", "Skin"],
                correctAnswer: 3
            },
            {
                question: "What gas do plants absorb from the atmosphere?",
                options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                correctAnswer: 2
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"],
                correctAnswer: 2
            },
            {
                question: "At what temperature does water boil (at sea level)?",
                options: ["90°C", "100°C", "110°C", "120°C"],
                correctAnswer: 1
            },
            {
                question: "What force keeps us on the ground?",
                options: ["Magnetism", "Friction", "Gravity", "Inertia"],
                correctAnswer: 2
            },
            {
                question: "How many bones are in the adult human body?",
                options: ["196", "206", "216", "226"],
                correctAnswer: 1
            },
            {
                question: "What is the most abundant gas in Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correctAnswer: 2
            }
        ]
    },
    english: {
        title: "English Language Quiz",
        subject: "English",
        icon: "fas fa-book",
        color: "#F59E0B",
        timePerQuestion: 40,
        questions: [
            {
                question: "Which word is a synonym for 'happy'?",
                options: ["Sad", "Joyful", "Angry", "Tired"],
                correctAnswer: 1
            },
            {
                question: "What is the plural of 'child'?",
                options: ["Childs", "Children", "Childes", "Childrens"],
                correctAnswer: 1
            },
            {
                question: "Identify the verb in this sentence: 'The cat sleeps on the mat.'",
                options: ["cat", "sleeps", "mat", "the"],
                correctAnswer: 1
            },
            {
                question: "Which is the correct spelling?",
                options: ["Accommodate", "Acommodate", "Acomodate", "Accomodate"],
                correctAnswer: 0
            },
            {
                question: "What type of word is 'quickly'?",
                options: ["Noun", "Verb", "Adjective", "Adverb"],
                correctAnswer: 3
            },
            {
                question: "Which sentence is grammatically correct?",
                options: [
                    "She don't like pizza",
                    "She doesn't likes pizza",
                    "She doesn't like pizza",
                    "She not like pizza"
                ],
                correctAnswer: 2
            },
            {
                question: "What is the past tense of 'go'?",
                options: ["Goed", "Gone", "Went", "Going"],
                correctAnswer: 2
            },
            {
                question: "Which is an antonym for 'difficult'?",
                options: ["Hard", "Challenging", "Easy", "Tough"],
                correctAnswer: 2
            },
            {
                question: "Identify the noun: 'The blue car drove quickly.'",
                options: ["blue", "car", "drove", "quickly"],
                correctAnswer: 1
            },
            {
                question: "Which punctuation mark ends a question?",
                options: ["Period (.)", "Comma (,)", "Question mark (?)", "Exclamation (!)"],
                correctAnswer: 2
            }
        ]
    },
    geography: {
        title: "Geography Quiz",
        subject: "Geography",
        icon: "fas fa-globe",
        color: "#06B6D4",
        timePerQuestion: 40,
        questions: [
            {
                question: "What is the capital of France?",
                options: ["London", "Berlin", "Paris", "Madrid"],
                correctAnswer: 2
            },
            {
                question: "Which is the largest ocean on Earth?",
                options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                correctAnswer: 3
            },
            {
                question: "How many continents are there?",
                options: ["5", "6", "7", "8"],
                correctAnswer: 2
            },
            {
                question: "Which country has the largest population?",
                options: ["India", "United States", "China", "Indonesia"],
                correctAnswer: 2
            },
            {
                question: "What is the longest river in the world?",
                options: ["Amazon", "Nile", "Mississippi", "Yangtze"],
                correctAnswer: 1
            },
            {
                question: "Mount Everest is located in which mountain range?",
                options: ["Alps", "Andes", "Rockies", "Himalayas"],
                correctAnswer: 3
            },
            {
                question: "Which desert is the largest in the world?",
                options: ["Gobi", "Sahara", "Arabian", "Kalahari"],
                correctAnswer: 1
            },
            {
                question: "What is the capital of Japan?",
                options: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
                correctAnswer: 2
            },
            {
                question: "Which country is known as the Land of the Rising Sun?",
                options: ["China", "Japan", "Thailand", "Korea"],
                correctAnswer: 1
            },
            {
                question: "The Great Barrier Reef is located off the coast of which country?",
                options: ["Brazil", "Australia", "Indonesia", "Philippines"],
                correctAnswer: 1
            }
        ]
    }
};

let quizTaking = {
    quiz: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    startTime: null,
    questionTimer: null,
    timeRemaining: 0,
    quizKey: ''
};

function init() {
    displayAvailableQuizzes();
}


function displayAvailableQuizzes() {
    const container = document.getElementById('quiz-subjects-grid');
    
    container.innerHTML = Object.keys(quizDatabase).map(key => {
        const quiz = quizDatabase[key];
        return `
            <div class="subject-card" onclick="startQuiz('${key}')" style="border-color: ${quiz.color}">
                <div class="subject-icon" style="color: ${quiz.color}">
                    <i class="${quiz.icon}"></i>
                </div>
                <h3>${quiz.title}</h3>
                <p>${quiz.subject}</p>
                <div class="subject-details">
                    <span><i class="fas fa-question-circle"></i> ${quiz.questions.length} Questions</span>
                    <span><i class="fas fa-clock"></i> ${quiz.timePerQuestion}s each</span>
                </div>
                <button class="btn-take-quiz">Start Quiz <i class="fas fa-arrow-right"></i></button>
            </div>
        `;
    }).join('');
}


function startQuiz(quizKey) {
    quizTaking.quiz = JSON.parse(JSON.stringify(quizDatabase[quizKey]));
    quizTaking.quizKey = quizKey;
    quizTaking.currentQuestionIndex = 0;
    quizTaking.userAnswers = new Array(quizTaking.quiz.questions.length).fill(null);
    quizTaking.startTime = Date.now();
    
    document.getElementById('quiz-selection').style.display = 'none';
    document.getElementById('quiz-taking').style.display = 'block';
    
    document.getElementById('taking-quiz-title').textContent = quizTaking.quiz.title;
    document.getElementById('taking-quiz-subject').textContent = quizTaking.quiz.subject;
    document.getElementById('total-questions').textContent = quizTaking.quiz.questions.length;
    
    displayQuestion();
}


function displayQuestion() {
    const question = quizTaking.quiz.questions[quizTaking.currentQuestionIndex];
    const questionNum = quizTaking.currentQuestionIndex + 1;
    const totalQuestions = quizTaking.quiz.questions.length;
    
    document.getElementById('current-question-num').textContent = questionNum;
    document.getElementById('question-display').textContent = question.question;
    
    const progress = (questionNum / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    
    
    const optionsContainer = document.getElementById('options-display');
    optionsContainer.innerHTML = question.options.map((option, index) => {
        const isSelected = quizTaking.userAnswers[quizTaking.currentQuestionIndex] === index;
        return `
            <div class="quiz-option ${isSelected ? 'selected' : ''}" onclick="selectAnswer(${index})">
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            </div>
        `;
    }).join('');
    

    document.getElementById('prev-btn').disabled = quizTaking.currentQuestionIndex === 0;
    
    if (quizTaking.currentQuestionIndex === totalQuestions - 1) {
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('submit-btn').style.display = 'block';
    } else {
        document.getElementById('next-btn').style.display = 'block';
        document.getElementById('submit-btn').style.display = 'none';
    }
    
   
    startQuestionTimer();
}

function startQuestionTimer() {
    clearInterval(quizTaking.questionTimer);
    quizTaking.timeRemaining = quizTaking.quiz.timePerQuestion;
    
    updateTimerDisplay();
    
    quizTaking.questionTimer = setInterval(() => {
        quizTaking.timeRemaining--;
        updateTimerDisplay();
        
        if (quizTaking.timeRemaining <= 0) {
            clearInterval(quizTaking.questionTimer);
          
            if (quizTaking.currentQuestionIndex < quizTaking.quiz.questions.length - 1) {
                nextQuestion();
            } else {
                submitQuiz();
            }
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerElement = document.getElementById('quiz-timer-display');
    timerElement.textContent = quizTaking.timeRemaining + 's';
    
    
    if (quizTaking.timeRemaining <= 10) {
        timerElement.style.color = '#EF4444';
    } else if (quizTaking.timeRemaining <= 20) {
        timerElement.style.color = '#F59E0B';
    } else {
        timerElement.style.color = '#EC4899';
    }
}

function selectAnswer(optionIndex) {
    quizTaking.userAnswers[quizTaking.currentQuestionIndex] = optionIndex;
    displayQuestion();
}


function nextQuestion() {
    if (quizTaking.currentQuestionIndex < quizTaking.quiz.questions.length - 1) {
        quizTaking.currentQuestionIndex++;
        displayQuestion();
    }
}


function previousQuestion() {
    if (quizTaking.currentQuestionIndex > 0) {
        quizTaking.currentQuestionIndex--;
        displayQuestion();
    }
}


function submitQuiz() {
    clearInterval(quizTaking.questionTimer);
    
    
    let correctCount = 0;
    quizTaking.quiz.questions.forEach((question, index) => {
        if (quizTaking.userAnswers[index] === question.correctAnswer) {
            correctCount++;
        }
    });
    
    const totalQuestions = quizTaking.quiz.questions.length;
    const scorePercent = Math.round((correctCount / totalQuestions) * 100);
    
  
    const quizResults = loadUserData('quizResults') || [];
    quizResults.push({
        quizTitle: quizTaking.quiz.title,
        subject: quizTaking.quiz.subject,
        score: scorePercent,
        correctAnswers: correctCount,
        totalQuestions: totalQuestions,
        date: new Date().toISOString()
    });
    saveUserData('quizResults', quizResults);
   
    displayResults(correctCount, totalQuestions, scorePercent);
}


function displayResults(correctCount, totalQuestions, scorePercent) {
    document.getElementById('quiz-taking').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'block';
    
    document.getElementById('score-percent').textContent = scorePercent;
    document.getElementById('correct-answers').textContent = correctCount;
    document.getElementById('total-questions-result').textContent = totalQuestions;
    
 
    const gradeMessage = document.getElementById('grade-message');
    if (scorePercent >= 90) {
        gradeMessage.textContent = "Excellent! Outstanding Performance!";
        gradeMessage.style.color = "#10B981";
    } else if (scorePercent >= 75) {
        gradeMessage.textContent = "Great Job! Keep it up!";
        gradeMessage.style.color = "#10B981";
    } else if (scorePercent >= 60) {
        gradeMessage.textContent = "Good Effort! Room for improvement.";
        gradeMessage.style.color = "#F59E0B";
    } else {
        gradeMessage.textContent = "Keep practicing! You'll get better!";
        gradeMessage.style.color = "#EF4444";
    }
    

    const reviewContainer = document.getElementById('answer-review');
    reviewContainer.innerHTML = quizTaking.quiz.questions.map((question, index) => {
        const userAnswer = quizTaking.userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        
        return `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <div class="review-header">
                    <h4>Question ${index + 1}</h4>
                    <span class="review-badge ${isCorrect ? 'badge-correct' : 'badge-incorrect'}">
                        ${isCorrect ? '<i class="fas fa-check-circle"></i> Correct' : '<i class="fas fa-times-circle"></i> Incorrect'}
                    </span>
                </div>
                <p class="review-question">${question.question}</p>
                <div class="review-options">
                    ${question.options.map((option, optIndex) => {
                        let className = 'review-option';
                        if (optIndex === question.correctAnswer) {
                            className += ' correct-option';
                        } else if (optIndex === userAnswer && !isCorrect) {
                            className += ' wrong-option';
                        }
                        return `
                            <div class="${className}">
                                <span class="option-letter">${String.fromCharCode(65 + optIndex)}</span>
                                <span>${option}</span>
                                ${optIndex === question.correctAnswer ? '<i class="fas fa-check-circle"></i>' : ''}
                                ${optIndex === userAnswer && !isCorrect ? '<i class="fas fa-times-circle"></i>' : ''}
                            </div>
                        `;
                    }).join('')}
                </div>
                ${userAnswer === null ? '<p class="not-answered">Not answered</p>' : ''}
            </div>
        `;
    }).join('');
}


function retakeQuiz() {
    startQuiz(quizTaking.quizKey);
}


function backToQuizList() {
    document.getElementById('quiz-selection').style.display = 'block';
    document.getElementById('quiz-taking').style.display = 'none';
    document.getElementById('quiz-results').style.display = 'none';
    
    clearInterval(quizTaking.questionTimer);
    displayAvailableQuizzes();
}

init();
