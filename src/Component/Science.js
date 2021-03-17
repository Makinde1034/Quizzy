import React,{useState} from 'react'
import styles from './Styles/Science.module.css'
import {Button} from 'antd'
import pic from './undraw_science_fqhl.png'
import {Modal} from 'antd'
import {Link} from 'react-router-dom'
import {SmileFilled} from '@ant-design/icons'

function Science() {

    const [questions,setQuestions] = useState([
        {
            number:1,
            questionText:'  Pollination by birds is called ?',
            options:[
                {text:'Autogamy',isCorrect:false},
                {text:'ornithophily',isCorrect:true},
                {text:'entomophil',isCorrect:false},
                {text:'anemophily',isCorrect:false}
            ]
        },

        {
            number:2,
            questionText:'  What percent of fire-related deaths are due to smoke inhalation rather than burns? ',
            options:[
                {text:'10%',isCorrect:false},
                {text:'50%',isCorrect:false},
                {text:'80%',isCorrect:true},
                {text:'99%',isCorrect:false}
            ]
        },

        {
            number:3,
            questionText:'  The fastest-running terrestrial animal is____  ',
            options:[
                {text:'Cheetah',isCorrect:true},
                {text:'Horse',isCorrect:false},
                {text:'Lion',isCorrect:false},
                {text:'Jaquar',isCorrect:false}
            ]
        },

        {
            number:4,
            questionText:'  As you go down into a well, your weight___   ',
            options:[
                {text:'Increases slightly',isCorrect:false},
                {text:'Decreases slightly',isCorrect:true},
                {text:'Remains exactly thesame',isCorrect:false},
   
            ]
        },

        {
            number:5,
            questionText:'  Bees must collect nectar from approximately how many flowers to make 1 pound of honeycomb?  Is it___',
            options:[
                {text:'10 thousand',isCorrect:false},
                {text:'2 million',isCorrect:false},
                {text:'20 million',isCorrect:false},
                {text:'50 million',isCorrect:true},
   
            ]
        },

        {
            number:6,
            questionText:' Albacore is a type of___ ',
            options:[
                {text:'Shell-fish',isCorrect:true},
                {text:'Tuna',isCorrect:false},
                {text:'Marble',isCorrect:false},
                {text:'Meteroid',isCorrect:false},
   
            ]
        },

        {
            number:7,
            questionText:' The only species of cat that lives and hunts in groups is ',
            options:[
                {text:'Lion',isCorrect:true},
                {text:'Leopard',isCorrect:false},
                {text:'Cougar',isCorrect:false},
                {text:'Jaguar',isCorrect:false},
   
            ]
        },

        
        {
            number:8,
            questionText:'The study of phenomena at very low temperatures is called: ',
            options:[
                {text:'Heat transfer',isCorrect:false},
                {text:'Mophology',isCorrect:false},
                {text:'Crystallography',isCorrect:false},
                {text:'Cryogenics',isCorrect:true},
   
            ]
        },

        {
            number:9,
            questionText:' Which prefix is often used with scientific terms to indicate that something is the same, equal or constant ',
            options:[
                {text:'Iso',isCorrect:true},
                {text:'Mega',isCorrect:false},
                {text:'Meta',isCorrect:false},
                {text:'Quasi',isCorrect:false},
   
            ]
        },

        {
            number:10,
            questionText:'  The branch of medical science which is concerned with the study of disease as it affects a community of people is called',
            options:[
                {text:'Epidemology',isCorrect:true},
                {text:'Oncology',isCorrect:false},
                {text:'Paleontology',isCorrect:false},
                {text:'Pathology',isCorrect:false},
   
            ]
        },

        
        {
            number:11,
            questionText:'   What famous scientist and inventor participated in the invention of the Aqua-Lung?',
            options:[
                {text:'Thomas Edison',isCorrect:false},
                {text:'Isasc Newton',isCorrect:false},
                {text:'Leonardo Da Vinci',isCorrect:false},
                {text:'Jacques Coustea',isCorrect:true},
   
            ]
        },

        {
            number:12,
            questionText:'  A type of plastic that is biodegradable has been in the news lately. The ingredient that makes it biodegradable is: ',
            options:[
                {text:'Vegetable Oil',isCorrect:false},
                {text:'Petroleum',isCorrect:false},
                {text:'Cornstarch',isCorrect:true},
                {text:'Leather',isCorrect:false},
   
            ]
        },

        {
            number:13,
            questionText:'Who was the marine biologist and author of Silent Spring who was one of the first people to warn of the dangers of pesticides like DDT? ',
            options:[
                {text:'Jacques Cousteau',isCorrect:false},
                {text:'Rachel Carson',isCorrect:true},
                {text:'Charles Darwin',isCorrect:false},
                {text:'Marlin Perkins',isCorrect:false},
   
            ]
        },

        {
            number:14,
            questionText:'If a metal can be drawn into wires relatively easily it is called:',
            options:[
                {text:'Malleable',isCorrect:false},
                {text:'Ductile',isCorrect:true},
                {text:'Extractive',isCorrect:false},
                {text:'Tactile',isCorrect:false},
   
            ]
        },

        {
            number:15,
            questionText:' Cystitis is the infection of which of the following?',
            options:[
                {text:'Liver',isCorrect:false},
                {text:'Urinary bladder',isCorrect:true},
                {text:'Pancreas',isCorrect:false},
                {text:'Lung',isCorrect:false},
   
            ]
        },

        {
            number:16,
            questionText:'  At room temperature, most elements are in which phase of matter?',
            options:[
                {text:'Solid',isCorrect:false},
                {text:'Gas',isCorrect:true},
                {text:'Liquid',isCorrect:false},
                {text:'Plasma',isCorrect:false},
   
            ]
        }


        
    ])

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
        
        const newQuestions = questions.filter(item => number != item.number);
        setQuestions([...newQuestions]);
        console.log(questions);
       
       
        

    }


    // setTimeout(()=>{
        
    //     setCurrent(current + 1);

        
    // },10000);

    function getRnd(min,max){
       const val = Math.floor(Math.random() * (max - min)) + min
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
        <div style={{paddingTop:"10vh"}}>
            {/* <nav className={styles.nav}>
                <h1>Score:{score}</h1>
                
                <h2>{questionNumber}/{questions.length}</h2>
               
            </nav> */}
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
                        <Link to='/geography'><Button type='primary' style={{margin:'5px',fontWeight:"bold"}}>Geography</Button></Link>
                        <Link to='/movies'><Button type='primary' style={{margin:'5px',fontWeight:"bold"}}>Movies</Button></Link>
                        
                    </div>
                    <Button type='link' onClick={reload}>Play Again</Button>
                </Modal>
            </div>
        </div>
    )
}

export default Science
