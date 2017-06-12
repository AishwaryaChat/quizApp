var questions = [
  new Question('Which one is not an object oriented programming language?', ['Java', 'C', 'C++', 'C#'], 'C'),
  new Question('Which language is used for styling web pages?', ['HTML', 'jQuery', 'CSS', 'XML'], 'CSS'),
  new Question('Which language is used for web-apps?', ['php', 'javascript', 'python', 'All'], 'All'),
  new Question('MVC is a __________?', ['Framework', 'Library', 'Language', 'All'], 'Framework')
]

var quiz = new Quiz(questions)

function populate () {
  if (quiz.isEnded()) {
    // showScores()
  } else {
      // show questions
    var element = document.getElementById('question')
    element.innerHTML = quiz.getQuestionIndex().text

    // show choices
    var choices = quiz.getQuestionIndex().choices
    choices.forEach((choice, i) => {
      let element = document.getElementById(`choice${i}`)
      element.innerHTML = choices[i]
      guess(`btn${i}`, choices[i])
    })

  }
}

const guess = (id, guess) => {
  let button = document.getElementById(id)
  button.onclick = () => {
    quiz.guess(guess)
    populate()
  }
}

populate()
