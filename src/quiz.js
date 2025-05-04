class Quiz {
    // YOUR CODE HERE:
    //
    // 1. constructor (questions, timeLimit, timeRemaining)
constructor(questions,timeLimit,timeRemaining){
    this.questions=questions;
    this.timeLimit=timeLimit;
this.timeRemaining=timeRemaining;
this.correctAnswer=0;
this.currentQuestionIndex=0;
}
    // 2. getQuestion()
    getQuestion(){
        return this.choices[this.currentQuestionIndex];
    }
    // 3. moveToNextQuestion()
moveToNextQuestion(){
    this.currentQuestionIndex++
}
    // 4. shuffleQuestions()
    shuffleQuestion(){
        for (let i = this.questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.questions[i], this.questions[j]] = [this.questions[j], this.questions[i]];
    }
}

    // 5. checkAnswer(answer)
checkAnswer(answer){
const currentQuestion=this.questions[this.currentQuestionIndex];
if(answer===currentQuestion.correctAnswer){
    this.correctAnswer++;
}
}
    // 6. hasEnded()
    hasEnded(){
return this.currentQuestionIndex>=this.questions.length;
    }

    filterQuestion(difficultyLevel){
return this.questions.filter((question)=>question.difficulty===difficultyLevel);

    }
    averageDifficulty(){
        const total=this.questions.reduce((sum,question)=>sum+question.difficulty,0);
        return this.questions.length ? total/this.questions.length:0;

    }
}