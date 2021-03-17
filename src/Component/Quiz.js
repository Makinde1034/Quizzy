import { Button } from 'antd'
import React from 'react'

function Quiz() {

    const questions = [
        {
         number:1,
         questionText:'I come ____ Italy?',
         answerOptions:[
             {answerText:'from',isCorrect:true},
             {answerText:'to',isCorrect:false},
             {answerText:'at',isCorrect:false},
             {answerText:'in',isCorrect:false},
         ]
            
           
            
        },
        {   
            number:2,
            questionText:'His office is on the first ____',
            answerOptions:[
                {answerText:'Level',isCorrect:false},
                {answerText:'ground',isCorrect:false},
                {answerText:'stage',isCorrect:false},
                {answerText:'floor',isCorrect:true}
            ]
               
              
               
           }
        
    ]

    const [currentQuestion,setCurrentQuestion] = React.useState(0);
    const [score,setScore] = React.useState(0);

    const nextQuestion = (bryan) =>{
        if(bryan === true){
            setScore(score + 1);
        }

        const next = currentQuestion + 1
        if (next < questions.length){
            setCurrentQuestion(next)
        }else{
            alert('no more');
        }
        
    }
 


   
    


    return (
        <div style={{height:"100vh",background:'white'}}>
            <h1> {questions[currentQuestion].number} {questions[currentQuestion].questionText}</h1>
            {questions[currentQuestion].answerOptions.map(item =>(
                <Button onClick={()=>nextQuestion(item.isCorrect)}  style={{margin:'5px'}}>{item.answerText}</Button>
            ))}
            {score}/{questions.length}
        </div>
    )
}

export default Quiz;
