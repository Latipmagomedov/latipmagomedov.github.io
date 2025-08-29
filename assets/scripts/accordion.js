const questions = document.querySelectorAll('.questions__question');

questions.forEach((question, index) => {
    question.addEventListener('click', () => {
        questions.forEach(item => {
            if (item !== question) item.classList.remove('questions__question_active')
        })

        question.classList.toggle('questions__question_active')
    })
})
