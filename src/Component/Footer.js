import React from 'react'
import style from './Styles/Footer.module.css'
import {TwitterCircleFilled} from '@ant-design/icons'
import {GithubOutlined} from '@ant-design/icons'
import {InstagramOutlined} from '@ant-design/icons'

function Footer() {
    return (
        <div className={style.footer}>
            <ul>
                <li><TwitterCircleFilled style={{fontSize:'25px'}}  /></li>
                <li><GithubOutlined style={{fontSize:'25px'}}/></li>
                <li><InstagramOutlined  style={{fontSize:'25px'}}/></li>
            </ul>
        </div>
    )
}

export default Footer
