import React from 'react'
import {Layout,Menu} from 'antd'
import style from './Styles/Header.module.css'
import {UserOutlined} from '@ant-design/icons'
import {GithubOutlined} from '@ant-design/icons'
import {ProjectOutlined} from '@ant-design/icons'
import {MenuFoldOutlined} from '@ant-design/icons'
import {MenuOutlined} from '@ant-design/icons'
import {HomeOutlined} from '@ant-design/icons'
import {BookOutlined} from '@ant-design/icons'
import {Link} from 'react-router-dom'


function Header() {

    const Item = Menu.Item

    const [toggle,setToggle] = React.useState(false);

    const handleToggle = ()=>{
        setToggle(!toggle);
    }

    
    return (
        <div>
            <Layout.Header className={style.header}>
                <h1><BookOutlined style={{fontSize:'25px'}} /> Quizzy</h1>
                <ul>
                    {/* <li>About</li> */}
                    <li>Github</li>
                    <li>Other projects</li>
                </ul>
                
            </Layout.Header>
            {/* <Layout.Sider breakpoint='sm' >
                <Menu>
                    <Item>hjbjhdj</Item>
                    <Item>hjbjhdj</Item>
                    <Item>hjbjhdj</Item>
                </Menu>
            </Layout.Sider> */}
            <div className={toggle ? style.active : style.side}>
                <Menu theme='dark' style={{background:'#6C63FF'}}>
                    <Item  key='About'>
                      <li style={{display:'flex',alignItems:'center',color:'white'}}><UserOutlined style={{color:'white',fontSize:'20px'}}   /> About </li>
                    </Item>
                    <Item onClick={()=>setToggle(!toggle)} key='Home'>
                      <Link to='/'>
                        <li style={{display:'flex',alignItems:'center',color:'white'}}><HomeOutlined style={{color:'white',fontSize:'20px'}}   /> Home </li>
                      </Link>
                      
                    </Item>
                    <Item onClick={()=>setToggle(!toggle)} key='Github'>
                      <li style={{display:'flex',alignItems:'center',color:'white'}}><GithubOutlined style={{color:'white',fontSize:'20px'}}   /> Github </li>
                    </Item>
                    <Item onClick={()=>setToggle(!toggle)} key='Others'>
                      <Link to='/projects'>
                        <li style={{display:'flex',alignItems:'center',color:'white'}}><ProjectOutlined style={{color:'white',fontSize:'20px'}}   /> Projects </li>
                      </Link>
                      
                    </Item>
                   
                    {/* <Item key='Aboutt'>
                      <li style={{display:'flex',alignItems:'center',color:'white'}}><UserOutlined style={{color:'white',fontSize:'20px'}}   /> About </li>
                    </Item> */}
                </Menu>
            </div>
            <div onClick={handleToggle}  className={style.navopen}>
                {/* <div style={{width:'25px',height:'2px',background:'white'}}></div>
                <div style={{width:'25px',height:'2px',background:'white'}}></div>
                <div style={{width:'25px',height:'2px',background:'white'}}></div> */}
                {toggle ? <MenuFoldOutlined style={{color:'white'}} /> : <MenuOutlined style={{color:'white'}} /> }
            </div>
        </div>
    )
}

export default Header
