import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import Notfound from './Notfound';
import App from './App';
import DigitalClock from "./DigitalClock";
//import Trailer from "./Trailer"
import Form from './Form';
import Account from "./Account"
import TrailerClone from './TrailerClone';
import TrailerData from './TrailerData';
import Result from './Result';
import LoginForm from './LoginForm';
import TodoApp from './TodoApp';



ReactDOM.render(
  <>
  <DigitalClock />
  <Result />
  {/* <Trailer /> */}
  <TrailerClone poster={TrailerData[0].poster} title ={TrailerData[0].title} link={TrailerData[0].link}/>
  <TrailerClone poster={TrailerData[1].poster} title ={TrailerData[1].title} link={TrailerData[1].link}/>
  <App />
  <Form />
  <Account />
  <LoginForm /><br /><br />
  <TodoApp />

  {/* <Notfound /> */}
  </>,
  document.getElementById('root')
);
