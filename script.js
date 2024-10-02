document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-btn');
  const nextButton = document.getElementById('next-btn');
  const questionContainerElement = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const answerButtonsElement = document.getElementById('answer-buttons');

  let shuffledQuestions, currentQuestionIndex;

  startButton.addEventListener('click', startGame);
  nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
  });

  function startGame() {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
  }

  function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
  }

  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }

  function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }

  function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
    });
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide');
    } else {
      startButton.innerText = 'Restart';
      startButton.classList.remove('hide');
    }
  }

  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }

  function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }

  const questions = [
    // Existing 5 Questions
    {
      question: 'In which year was IIT Bombay established?',
      answers: [
        { text: '1958', correct: true },
        { text: '1962', correct: false },
        { text: '1948', correct: false },
        { text: '1973', correct: false }
      ]
    },
    {
      question: 'Which of the following is the main campus location of IIT Bombay?',
      answers: [
        { text: 'Powai', correct: true },
        { text: 'Bandra', correct: false },
        { text: 'Juhu', correct: false },
        { text: 'Colaba', correct: false }
      ]
    },
    {
      question: 'Who was the first Director of IIT Bombay?',
      answers: [
        { text: 'Prof. D.J. Nagoa', correct: false },
        { text: 'Prof. Subimal Ghosh', correct: false },
        { text: 'Prof. S. B. Roy', correct: true },
        { text: 'Prof. Devang Khakhar', correct: false }
      ]
    },
    {
      question: 'What is the famous techfest organized by IIT Bombay called?',
      answers: [
        { text: 'Tech Mahindra', correct: false },
        { text: 'Techkriti', correct: false },
        { text: 'Techfest', correct: true },
        { text: 'Technovanza', correct: false }
      ]
    },
    {
      question: 'Which of these is a popular student activity at IIT Bombay?',
      answers: [
        { text: 'Coding Club', correct: true },
        { text: 'Cooking Club', correct: false },
        { text: 'Photography Club', correct: true },
        { text: 'All of the above', correct: False }
      ]
    },

    // Additional 20 Questions
    {
      question: 'What is the name of IIT Bombay\'s annual cultural festival?',
      answers: [
        { text: 'Moodi', correct: true },
        { text: 'Saarang', correct: false },
        { text: 'Alcheringa', correct: false },
        { text: 'Riviera', correct: false }
      ]
    },
    {
      question: 'What is IIT Bombay’s main library called?',
      answers: [
        { text: 'Central Library', correct: true },
        { text: 'Knowledge Center', correct: false },
        { text: 'Tech Library', correct: false },
        { text: 'Learning Hub', correct: false }
      ]
    },
    {
      question: 'Which of the following is IIT Bombay’s official mascot?',
      answers: [
        { text: 'Gajaraj', correct: true },
        { text: 'Tiger', correct: false },
        { text: 'Lion', correct: false },
        { text: 'Falcon', correct: false }
      ]
    },
    {
      question: 'Which department of IIT Bombay is the oldest?',
      answers: [
        { text: 'Civil Engineering', correct: true },
        { text: 'Mechanical Engineering', correct: false },
        { text: 'Computer Science', correct: false },
        { text: 'Electrical Engineering', correct: false }
      ]
    },
    {
      question: 'Which body governs the student affairs at IIT Bombay?',
      answers: [
        { text: 'Student Council', correct: false },
        { text: 'Institute General Body', correct: false },
        { text: 'Student Gymkhana', correct: true },
        { text: 'Club Council', correct: false }
      ]
    },
    {
      question: 'What is the approximate size of IIT Bombay\'s campus?',
      answers: [
        { text: '500 acres', correct: true },
        { text: '250 acres', correct: false },
        { text: '1000 acres', correct: false },
        { text: '700 acres', correct: false }
      ]
    },
    {
      question: 'What is IIT Bombay’s motto?',
      answers: [
        { text: 'Knowledge is Power', correct: false },
        { text: 'Gyaanam Paramam Dhyeyam', correct: true },
        { text: 'Learn, Innovate, Lead', correct: false },
        { text: 'In Pursuit of Excellence', correct: false }
      ]
    },
    {
      question: 'Which of the following is a research center at IIT Bombay?',
      answers: [
        { text: 'Nuclear Research Center', correct: false },
        { text: 'National Center for Software Technology', correct: true },
        { text: 'Indian Space Research Center', correct: false },
        { text: 'Center for Data Science', correct: false }
      ]
    },
    {
      question: 'Who is the current Director of IIT Bombay as of 2024?',
      answers: [
        { text: 'Prof. Subhasis Chaudhuri', correct: true },
        { text: 'Prof. S. B. Roy', correct: false },
        { text: 'Prof. Devang Khakhar', correct: false },
        { text: 'Prof. Rangan Banerjee', correct: false }
      ]
    },
    {
      question: 'What is IIT Bombay\'s entrepreneurship incubator called?',
      answers: [
        { text: 'SINE', correct: true },
        { text: 'T-Hub', correct: false },
        { text: 'Startup India', correct: false },
        { text: 'I-Hub', correct: false }
      ]
    },
    {
      question: 'Which IIT Bombay alumni became the CEO of Google?',
      answers: [
        { text: 'Sundar Pichai', correct: true },
        { text: 'Satya Nadella', correct: false },
        { text: 'N.R. Narayana Murthy', correct: false },
        { text: 'Mukesh Ambani', correct: false }
      ]
    },
    {
      question: 'What is the name of the student-run newspaper at IIT Bombay?',
      answers: [
        { text: 'Insight', correct: true },
        { text: 'IIT Chronicle', correct: false },
        { text: 'Campus Times', correct: false },
        { text: 'The Daily Bulletin', correct: false }
      ]
    },
    {
      question: 'What is IIT Bombay’s annual sports event called?',
      answers: [
        { text: 'Spardha', correct: false },
        { text: 'Aavhan', correct: true },
        { text: 'Kshitij', correct: false },
        { text: 'Shaurya', correct: false }
      ]
    },
    {
      question: 'Which IIT Bombay hostel is known for its cultural and tech prowess?',
      answers: [
        { text: 'Hostel 10', correct: true },
        { text: 'Hostel 7', correct: false },
        { text: 'Hostel 3', correct: false },
        { text: 'Hostel 2', correct: false }
      ]
    },
    {
      question: 'What is the name of the student government body at IIT Bombay?',
      answers: [
        { text: 'Students’ Senate', correct: true },
        { text: 'General Council', correct: false },
        { text: 'Institute Committee', correct: false },
        { text: 'Student Club', correct: false }
      ]
    },
    {
      question: 'Which of these is a prominent student organization at IIT Bombay?',
      answers: [
        { text: 'Entrepreneurship Cell', correct: true },
        { text: 'Astronomy Club', correct: false },
        { text: 'Design Club', correct: false },
        { text: 'All of the above', correct: false }
      ]
    },
    {
      question: 'What is the name of the autonomous wing of IIT Bombay that promotes innovation?',
      answers: [
        { text: 'CTARA', correct: false },
        { text: 'SINE', correct: true },
        { text: 'Tech Innovation Lab', correct: false },
        { text: 'Start-up India', correct: false }
      ]
    }
  ];
});
