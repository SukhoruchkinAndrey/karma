import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Application.css';
import List from '../List/List';

const data = [
   {
      id: 0,
      name: 'Иванов Иван',
      lastComment: 'Пиздец конечно, ща бы в 2018 не уметь в es6',
      plus: 0,
      minus: 4
   },
   {
      id: 0,
      name: 'Андреев Андрей',
      lastComment: 'Пиздец конечно, ща бы в 2018 не уметь в es6',
      plus: 3,
      minus: 2
   },{
      id: 0,
      name: 'Петров Петр',
      lastComment: 'Пиздец конечно, ща бы в 2018 не уметь в es6',
      plus: 2,
      minus: 3
   },
   {
      id: 0,
      name: 'Александров Александр',
      lastComment: 'Пиздец конечно, ща бы в 2018 не уметь в es6',
      plus: 1,
      minus: 1
   }
];
class Application extends Component {
   render() {
      return (
         <div className="App">
            <header className="App-header">
               <img src={logo} className="App-logo" alt="logo" />
               <h1 className="App-title">Bibosik</h1>
            </header>
            <p className="App-intro">
               <List items={data}/>
            </p>
         </div>
      );
   }
}

export default Application;
