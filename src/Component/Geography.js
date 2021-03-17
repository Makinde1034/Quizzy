import React,{useState} from 'react'
import styles from './Styles/Geography.module.css'
import {Button} from 'antd'
import pic from './undraw_video_files_fu10.png'
import {Modal} from 'antd'
import {Link} from 'react-router-dom'
import {SmileFilled} from '@ant-design/icons'

function Science() {

    const [questions,setQuestions] = useState([
        {
            number:1,
            questionText:'Which one of the following countries has the maximum number of rivers?',
            options:[
                {text:'Canada',isCorrect:false},
                {text:'China',isCorrect:true},
                {text:'Brazil',isCorrect:false},
                {text:'USA',isCorrect:false}
            ]
        },

        {
            number:2,
            questionText:'Zanskar Range is located in __',
            options:[
                {text:'Uttarakhand',isCorrect:false},
                {text:'Maharashtra',isCorrect:false},
                {text:'Jammu and Kahmir',isCorrect:true},
                {text:'Tamil Nadu',isCorrect:false}
            ]
        },

        {
            number:3,
            questionText:'Which of the following is not a Jovian Planet ?',
            options:[
                {text:'Earth',isCorrect:true},
                {text:'Jupiter',isCorrect:false},
                {text:'Satum',isCorrect:false},
                {text:'Uranus',isCorrect:false}
            ]
        },

        {
            number:4,
            questionText:'Buckingham Palace is located in ___',
            options:[
                {text:'Paris',isCorrect:false},
                {text:'London',isCorrect:true},
                {text:'Brussels',isCorrect:false},
                {text:'Scotland',isCorrect:false}
   
            ]
        },

        {
            number:5,
            questionText:'Which one of the following elements is the highest in Oceanic water ?',
            options:[
                {text:'Sodium',isCorrect:false},
                {text:'Calcium',isCorrect:false},
                {text:'Magnesium',isCorrect:false},
                {text:'Chloride',isCorrect:true},
   
            ]
        },

        {
            number:6,
            questionText:'How many countries are inside the United Kingdom ?',
            options:[
                {text:'4',isCorrect:true},
                {text:'3',isCorrect:false},
                {text:'2',isCorrect:false},
                {text:'4',isCorrect:false},
   
            ]
        },

        {
            number:7,
            questionText:'Which of these countries is not located in Africa ?',
            options:[
                {text:'Suriname',isCorrect:true},
                {text:'Rwanda',isCorrect:false},
                {text:'Algeria',isCorrect:false},
                {text:'Chad',isCorrect:false},
   
            ]
        },

        
        {
            number:8,
            questionText:'How many time horizons does Russia have ? ',
            options:[
                {text:'13',isCorrect:false},
                {text:'8',isCorrect:false},
                {text:'6',isCorrect:false},
                {text:'11',isCorrect:true},
   
            ]
        },

        {
            number:9,
            questionText:'Which of these Island countries is located in the caribbean ?',
            options:[
                {text:'Barbados',isCorrect:true},
                {text:'New Zealand',isCorrect:false},
                {text:'Jamaica',isCorrect:false},
                {text:'Ireland',isCorrect:false},
   
            ]
        },

        {
            number:10,
            questionText:'What is the area of the Vatican City?',
            options:[
                {text:'0.44 kilometer square',isCorrect:true},
                {text:'0.34 kilometer square',isCorrect:false},
                {text:'0.47 kilometer square',isCorrect:false},
                {text:'0.38 kilometer square',isCorrect:false},
   
            ]
        },

        
        {
            number:11,
            questionText:'Which actor got his frist big break in playing a lonely schoolboy in "About A Boy" ?',
            options:[
                {text:'Elijah Wood',isCorrect:false},
                {text:'Harry Parson',isCorrect:false},
                {text:'Micheal Scott',isCorrect:false},
                {text:'Nicholas Hoult',isCorrect:true},
   
            ]
        },

        {
            number:12,
            questionText:'The Hunua Ranges in __',
            options:[
                {text:'Australia',isCorrect:false},
                {text:'Switzerland',isCorrect:false},
                {text:'New Zealand',isCorrect:true},
                {text:'Wales',isCorrect:false},
   
            ]
        },

        {
            number:13,
            questionText:'What is smallest mountain in Canada  ?',
            options:[
                {text:'Mount Assiniboine',isCorrect:false},
                {text:'Mount Logan',isCorrect:true},
                {text:'Canadian Rockies',isCorrect:false},
                {text:'Mount Robson',isCorrect:false},
   
            ]
        },

        {
            number:14,
            questionText:'In which country is Tallinn located ? ?',
            options:[
                {text:'Ecuador',isCorrect:false},
                {text:'Estonia',isCorrect:true},
                {text:'Belgium',isCorrect:false},
                {text:'Poland',isCorrect:false},
   
            ]
        },

        {
            number:15,
            questionText:'Which city is not located in England ? ',
            options:[
                {text:'London',isCorrect:false},
                {text:'Edinburgh',isCorrect:true},
                {text:'Bristol',isCorrect:false},
                {text:'Cambridge',isCorrect:false},
   
            ]
        },

        {
            number:16,
            questionText:'Which country was NOT formerly part of Yugoslavia',
            options:[
                {text:'Bosnia Heregovina',isCorrect:false},
                {text:'Albania',isCorrect:true},
                {text:'Croatia',isCorrect:false},
                {text:'Macedonia',isCorrect:false},
   
            ]
        }


        
    ]);

    //switch questions
    const [current,setCurrent] = useState(Math.floor(Math.random() * (15 - 1)) + 1);
    const [score,setScore] = useState(0);
    const [time,setTime] = useState(0);
    const [questionNumber,setQuestionNumber] = useState(1);
    
    const arr = []

    const nextQuestion = (heyy,number) =>{
        
        // const quest =  current + 1
        // // generate random number
        
        
        // if(quest < questions.length){
        //     setCurrent(quest);
        // }
        if(heyy === true){
            setScore(score + 1);
        }
        
        // const newQuestions = questions.filter(item => item.number == number);
        // setQuestions(newQuestions);
        // console.log(questions);
        

    }


    // setTimeout(()=>{
        
    //     setCurrent(current + 1);

        
    // },10000);

    function getRnd(min,max){
       const val = Math.floor(Math.random() * (max - min)) + min
       console.log(val + 'this is a value');
       const quest =  val
    //    console.log(current)

       if(quest < questions.length){
           setCurrent( quest);
            
       }else{
           alert('no more questions')
       }

       
       
       if(questionNumber <  questions.length){
           setQuestionNumber(questionNumber + 1);
       }else{
            setVisible(true);
       }

     

       console.log(questionNumber);


      
    }
    
    // Modal
    const [visible,setVisible] = useState(false);

    const handleCancel = () =>{
        setVisible(false);
    }

    const setOnOk =()=>{
        setVisible(false)
    }

    // reload
    function reload(){
        window.location.reload();
    }
    

    return (
        <div className={styles.Movies}>
            
            <div  className={styles.main}>
                <h3>{questionNumber}). {questions[current].questionText}</h3>
                {questions[current].options.map(item =>{
                    return(
                        <Button onClick={()=>{getRnd(1,15);nextQuestion(item.isCorrect,item.number)}} type='ghost' size='large'>{item.text}</Button>
                    )
                })}
                 <Modal
                    title='Result'
                    visible ={visible}
                    onCancel={handleCancel}
                    onOk={setOnOk}
                    >
                    <h2>You got {score} correctly out of {questions.length}</h2>
                    <p>Play Other categories</p>
                    <div style={{display:'flex'}}>
                        <Link to='/science'><Button type='primary' style={{margin:'5px',fontWeight:"bold"}}>Sciences</Button></Link>
                        <Link to='/movies'><Button  type='primary' style={{margin:'5px',fontWeight:"bold"}}>Movies</Button></Link>
                        
                    </div>
                    <Button type='link' onClick={reload}>Play Again</Button>
                </Modal>
            </div>
        </div>
    )
}

export default Science
