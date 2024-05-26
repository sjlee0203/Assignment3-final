document.addEventListener('DOMContentLoaded', () => {
    const questions = [
        {
            question: 'Is "GROK" a valid word in Scrabble? If not, suggest an alternative valid word using the letters G, R, O, K.',
            answer: 'yes'
        },
        {
            question: 'Is "BLITZEN" a valid word in Scrabble? If not, suggest an alternative valid word using the letters B, L, I, T, Z, E, N.',
            answer: 'no'
        },
        {
            question: 'Is "JACKPOT" a valid word in Scrabble? If not, suggest an alternative valid word using the letters J, A, C, K, P, O, T.',
            answer: 'yes'
        },
        {
            question: 'Is "AWESOMER" a valid word in Scrabble? If not, suggest an alternative valid word using the letters A, W, E, S, O, M, E, R.',
            answer: 'no'
        },
        {
            question: 'Is "PLZ" a valid word in Scrabble? If not, suggest an alternative valid word using the letters P, L, Z.',
            answer: 'no'
        },
        {
            question: 'Is "BRUNCH" a valid word in Scrabble? If not, suggest an alternative valid word using the letters B, R, U, N, C, H.',
            answer: 'yes'
        },
        {
            question: 'Is "XERON" a valid word in Scrabble? If not, suggest an alternative valid word using the letters X, E, R, O, N.',
            answer: 'no'
        },
        {
            question: 'Is "QUIZZES" a valid word in Scrabble? If not, suggest an alternative valid word using the letters Q, U, I, Z, Z, E, S.',
            answer: 'yes'
        },
        {
            question: 'Is "FLYING" a valid word in Scrabble? If not, suggest an alternative valid word using the letters F, L, Y, I, N, G.',
            answer: 'yes'
        },
        {
            question: 'Is "GAMIFY" a valid word in Scrabble? If not, suggest an alternative valid word using the letters G, A, M, I, F, Y.',
            answer: 'yes'
        }
    ];

    const quizContainer = document.querySelector('.quiz');
    const scoreContainer = document.getElementById('score');
    const calculateScoreButton = document.getElementById('calculate-score');

    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.classList.add('question');
        questionElement.innerHTML = `
            <p><strong>Question ${index + 1}:</strong> ${q.question}</p>
            <div class="options">
                <button data-answer="yes">Yes</button>
                <button data-answer="no">No</button>
            </div>
        `;
        quizContainer.appendChild(questionElement);
    });

    calculateScoreButton.addEventListener('click', () => {
        let score = 0;
        const questionsElements = document.querySelectorAll('.question');
        questionsElements.forEach((questionElement, index) => {
            const selectedButton = questionElement.querySelector('button.selected');
            if (selectedButton && selectedButton.getAttribute('data-answer') === questions[index].answer) {
                score += 1;
            }
        });
        scoreContainer.textContent = `Your score: ${score} / ${questions.length}`;
    });

    document.addEventListener('click', (e) => {
        if (e.target.matches('.options button')) {
            const options = e.target.parentElement.querySelectorAll('button');
            options.forEach(option => option.classList.remove('selected'));
            e.target.classList.add('selected');
        }
    });
});
