import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import Header from "./components/Menu"
import {BrowserRouter, Route, Switch, NavLink} from 'react-router-dom';


function menu1(){
  return (
      <div>
          <h2>용인시현황</h2>
      </div>
  )
}

function menu2(){
  return (
      <div>
          <h2>지도</h2>
      </div>
  )
}

function menu3(){
  return (
      <div>
          <h2>선별진료소</h2>
      </div>
  )
}

function menu4(){
  return (
      <div>
          <h2>문의전화</h2>
      </div>
  )
}

function menu5(){
  return (
      <div>
          <h2>사이트정보</h2>
      </div>
  )
}

function App(){
  return (
      <div>
          <Header/>
          <ul>
              <li><NavLink exact to="/">용인시현황</NavLink></li>
              <li><NavLink to="/menu3">지도</NavLink></li>
              <li><NavLink to="/menu2">진료소</NavLink></li>
          </ul>
          <Switch>
              <Route exact path="/"><menu1></menu1></Route>
              <Route path="/topics"><menu2></menu2></Route>
              <Route path="/contact"><menu3></menu3></Route>
              <Route path="/">Not found</Route>
          </Switch>
      </div>
  )
}


export default App;
