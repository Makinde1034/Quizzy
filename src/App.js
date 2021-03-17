import logo from './logo.svg';
import React from 'react';
import './App.css';
import {DatePicker} from 'antd';
import 'antd/dist/antd.css';
import { Layout,Avatar,Menu,Button,Breadcrumb,Collapse,Steps,Carousel, } from 'antd';
import Game from './Component/Game'
import Header from './Component/Header'
import Science from './Component/Science'
import Movies from './Component/Movies'
import Project from './Component/Projects'

import Geography from './Component/Geography'
import Footer from './Component/Footer'
import {Switch,Route} from 'react-router-dom'



function App() {

  
  return (
    <div className='app'>
      <Header />
       <Switch>
         <Route path='/' exact component={Game} />
         <Route path='/science' component={Science}/>
         <Route path='/movies' component={Movies}/>
         <Route path='/projects' component={Project}/>
         <Route path='/geography' component={Geography}/>
       </Switch>
      {/* <Footer /> */}
    </div>
      
  );
}

export default App;
