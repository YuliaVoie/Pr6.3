function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    const correctAnswer = '7'; // Змініть значення на правильну відповідь

    if (selectedAnswer && selectedAnswer.value === correctAnswer) {
        document.getElementById('feedback').textContent = "Вірно!";
    } else {
        document.getElementById('feedback').textContent = "Неправильно. Спробуйте ще раз.";
    }
}