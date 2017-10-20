(function()
{
    const myQuestions = [
        {
            question: "You are hardly ever satisfied with your achievments.", answers: {
                a: "Totally agree",
                b: "Agree",
                c: "I am not sure",
                d: "Disagree",
                e: "Totally disagree"

            }},{ question: "You easily get impatient in traffic.", answers: {
                a: "Totally agree",
                b: "Agree",
                c: "I am not sure",
                d: "Disagree",
                e: "Totally disagree"

            }},{ question: "You always take work home with you.", answers: {
                a: "Totally agree",
                b: "Agree",
                c: "I am not sure",
                d: "Disagree",
                e: "Totally disagree"

            }},{ question: "You think that hobbies such as fishing or bowling are a waste of time.", answers: {
                a: "Totally agree",
                b: "Agree",
                c: "I am not sure",
                d: "Disagree",
                e: "Totally disagree"

            }}, {question: "You don't like to compete with others", answers: {
                a: "Totally agree",
                b: "Agree",
                c: "I am not sure",
                d: "Disagree",
                e: "Totally disagree"

            }}
    ];
   
    function buildQuiz()
    {
        //we will show all the questions 
        const output = [];
        
        myQuestions.forEach((currentQuestion, indexQuestion) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answer.push(
                    `<label> <input type="radio" name="question${questionNumber}]" values="${percentageValue(letter)}">
                ${letter} : ${currentQuestion.answers[letter]}
            </label>`
                    );
            }
            //presenting question to the user (HTML output)
            output.push(
                `<div class="slide">
                <div class="question">${currentQuestion.question}</div>
                <div class="answers"> ${answers.join("")}</div>
                </div>`);
        });
        const quizContainer = document.getElementById("quiz");
        const resultContainer=document.getElementById("result");
        // writting innerHTML
       quizContainer.innerHTML = output.join("");
    }
    function percentageValue(letter)
    {
        var percentage =0;

        if (letter =='a')
        {
            percentage=100;
        }
        else if (letter=='b')
        {
            percentage=75;
        }
        else if (letter=='c') 
        {
            percentage=50;
        }
        else if (letter=='d') 
        {
            percentage=25;
        }
        else if (letter=='e') 
        {
            percentage=0;
        }
        return percentage;
    }
    function calculateResult(percentage)
    {
       
    }
    var scoreTypeA,scoreTypeB,scoreTypeC,scoreTypeD =0;

    function showResults()
    {
        const answersContainer= quizContainer.querySelectorAll(".answers");
        myQuestions.forEach((currentQuestion, indexQuestion)=>
        {
            const answersContainer = answersContainer[indexQuestion];
            const selector=`input [name=question${questionNumber}]:checked`;
            const userAnswer=(answersContainer.querySelectorAll(selector)||{}).value;
            
            percentageValue(userAnswer);
        })
        

    }

    

}
)