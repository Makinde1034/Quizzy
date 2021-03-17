import React,{useRef} from 'react'

import styles from './Styles/Hero.module.css'
import {Button} from 'antd'
import Particles from 'react-particles-js'


function Hero() {
    let box = useRef(null);

    function move(){
        window.scrollTo(
            {
                top:350,
                behavior:'smooth'
            }
        )
    }
    return (
        <div className={styles.Hero}>
            
        <h1>Answer Multiple Choice Questions Online.</h1>
        <h1>Get Result Intantly.</h1>
        <p>On quizzy, you get to test your knowledge in different fields. Categories that are currently available are sciences, geography and movies.</p>
        <Button  onClick={move} style={{background:'#6C63FF',fontWeight:'bold',width:'150px'}} size='large' type='primary'>Play</Button> 
            
             
        </div>
    )
}

export default Hero
