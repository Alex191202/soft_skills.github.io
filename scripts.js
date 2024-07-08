const tests = [
    {
        question: "Почему важны коммуникационные навыки?",
        answers: [
            "Они помогают в общении с друзьями.",
            "Они способствуют карьерному росту.",
            "Они делают человека популярным."
        ],
        correct: 1
    },
    {
        question: "Как можно развивать коммуникационные навыки?",
        answers: [
            "Избегать общения.",
            "Практиковаться в активном слушании.",
            "Говорить как можно больше."
        ],
        correct: 1
    }
];

function loadTests() {
    const contentDiv = document.getElementById('content');
    tests.forEach((test, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<h3>${test.question}</h3>`;
        test.answers.forEach((answer, answerIndex) => {
            const answerElement = document.createElement('div');
            answerElement.innerHTML = `
                <input type="radio" name="question${index}" value="${answerIndex}">
                ${answer}
            `;
            questionElement.appendChild(answerElement);
        });
        contentDiv.appendChild(questionElement);
    });
}

window.onload = loadTests;
