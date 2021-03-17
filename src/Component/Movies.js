import React,{useState} from 'react'
import styles from './Styles/Movies.module.css'
import {Button} from 'antd'
import pic from './undraw_video_files_fu10.png'
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
            questionText:'How many Steven Spieberg films has Tom Hanks starred in?',
            options:[
                {text:'4',isCorrect:false},
                {text:'9',isCorrect:false},
                {text:'5',isCorrect:true},
                {text:'2',isCorrect:false}
            ]
        },

        {
            number:3,
            questionText:'In 2013 Lupita Nyongo became the first Kenyan and Mexican actress to win an Academy Award',
            options:[
                {text:'12 years a slave',isCorrect:true},
                {text:'The sun is also a star',isCorrect:false},
                {text:'Lion',isCorrect:false},
                {text:'How to get away with murder',isCorrect:false}
            ]
        },

        {
            number:4,
            questionText:'What year was the first Toy Story film released in cinemas ?',
            options:[
                {text:'1997',isCorrect:false},
                {text:'1995',isCorrect:true},
                {text:'1988',isCorrect:false},
                {text:'2001',isCorrect:false}
   
            ]
        },

        {
            number:5,
            questionText:'Who directed titanic avatar and the Termiator',
            options:[
                {text:'Zach Miller',isCorrect:false},
                {text:'Phillip Smith',isCorrect:false},
                {text:'Arnold Dicks',isCorrect:false},
                {text:'James Cameron',isCorrect:true},
   
            ]
        },

        {
            number:6,
            questionText:'Which oscar winning actress is the voice of Helen Parr (Elastigir) in The Incredibles',
            options:[
                {text:'Holly Hunter',isCorrect:true},
                {text:'Rachel Martinez',isCorrect:false},
                {text:'Angela Geller',isCorrect:false},
                {text:'Jennifer Anniston',isCorrect:false},
   
            ]
        },

        {
            number:7,
            questionText:'Name the 2015 film spinoff to Rocky series starring Micheal B.jordan',
            options:[
                {text:'Creed',isCorrect:true},
                {text:'Line of duty',isCorrect:false},
                {text:'Lazat',isCorrect:false},
                {text:'Message man',isCorrect:false},
   
            ]
        },

        
        {
            number:8,
            questionText:'Which actor broke two toes while filming lord of the rings : The Two Towers ? ',
            options:[
                {text:'Orlando Bloom',isCorrect:false},
                {text:'Elijah Wood',isCorrect:false},
                {text:'Ian McKellen',isCorrect:false},
                {text:'Viggo Mortensen',isCorrect:true},
   
            ]
        },

        {
            number:9,
            questionText:'What is the highest grossing box office film of all time?',
            options:[
                {text:'Avengers: EndGame',isCorrect:true},
                {text:'That thing you do',isCorrect:false},
                {text:'Black panther',isCorrect:false},
                {text:'Coming to america',isCorrect:false},
   
            ]
        },

        {
            number:10,
            questionText:'Which US comedian wrote and directed "get out of us" ?',
            options:[
                {text:'Jordan peele',isCorrect:true},
                {text:'Freddy Bryan',isCorrect:false},
                {text:'Eddie Murphy',isCorrect:false},
                {text:'Kelvin Hart',isCorrect:false},
   
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
            questionText:'Who played Mrs.Robinson in The Graduate',
            options:[
                {text:'Angela Denins',isCorrect:false},
                {text:'Phillis Kapor',isCorrect:false},
                {text:'Anne Bancroft',isCorrect:true},
                {text:'Monica Hanandez',isCorrect:false},
   
            ]
        },

        {
            number:13,
            questionText:'Wich famous actor played the role of Micheal Scott in the series "The Office" ?',
            options:[
                {text:'Rain Wilson',isCorrect:false},
                {text:'Steve Carell',isCorrect:true},
                {text:'John Krasinski',isCorrect:false},
                {text:'B.J Novak',isCorrect:false},
   
            ]
        },

        {
            number:14,
            questionText:'How long is the first Harry Potter movie: Harry Potter and thr Philosophers stone ?',
            options:[
                {text:'1.5 hours',isCorrect:false},
                {text:'2.5 hours',isCorrect:true},
                {text:'3.5 hours',isCorrect:false},
                {text:'4.5 hours',isCorrect:false},
   
            ]
        },

        {
            number:15,
            questionText:'Who plays a character named Lee Christmas in The Expandiples Series of films ',
            options:[
                {text:'Jet Li',isCorrect:false},
                {text:'Jason Statham',isCorrect:true},
                {text:'Sylvester Stallone',isCorrect:false},
                {text:'Arnold Schwarzenegger',isCorrect:false},
   
            ]
        },

        {
            number:16,
            questionText:'Who performs the most on-screen kills in the Lord Of The Rings ?',
            options:[
                {text:'Michelle Pfeiffer',isCorrect:false},
                {text:'Meg Ryan',isCorrect:true},
                {text:'Julia Roberts',isCorrect:false},
                {text:'Helen Hunt',isCorrect:false},
   
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
                        <Link to='/geography'><Button type='primary' style={{margin:'5px',fontWeight:"bold"}}>Geography</Button></Link>
                        
                    </div>
                    <Button type='link' onClick={reload}>Play Again</Button>
                </Modal>
            </div>
        </div>
    )
}

export default Science
