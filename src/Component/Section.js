import React from 'react'
import styles from './Styles/Section.module.css'
import {Button} from 'antd'
import image1 from './undraw_science_fqhl.png'
import image2 from './undraw_nature_m5ll (1).png'
import image3 from './undraw_video_files_fu10.png'
import {Link} from 'react-router-dom'
import {Modal} from 'antd'

 

function Section() {


    return (
        <div className={styles.section}>
            <div className={styles.row}>
                <div className={styles.col}>
                    <img src={image1} alt=""/>
                    <h3>Sciences</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, fugiat!</p>
                    <Link to='/science'>
                        <Button type='dashed'>play</Button>
                    </Link>
                    
                </div>
                <div className={styles.col}>
                    <img src={image3} alt=""/>
                    <h3>Movies</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, fugiat!</p>
                    <Link to='/movies'>
                        <Button type='dashed'>play</Button>
                    </Link>
                    
                </div>
                <div className={styles.col}>
                    <img src={image2} alt=""/>
                    <h3>Geography</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, fugiat!</p>
                    <Link to='/geography'>
                        <Button type='dashed'>play</Button>
                    </Link>
                </div>
            </div>
            {/* <div className={styles.row}>
                <div className={styles.col}>
                    <img src={image1} alt=""/>
                    <h3>Movies</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, fugiat!</p>
                    <Button type='dashed'>play</Button>
                </div>
                <div className={styles.col}>
                    <img src={image2} alt=""/>
                    <h3>Geography</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, fugiat!</p>
                    <Button type='dashed'>play</Button>
                </div>
                <div className={styles.col}>
                    <img src={image1} alt=""/>
                    <h3>Sciences</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, fugiat!</p>
                    <Button type='dashed'>play</Button>
                </div>
            </div> */}
           
        </div>
    )
}



export default Section
