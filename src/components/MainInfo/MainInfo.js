import React, { Component } from 'react';
import './MainInfo.css';
import ListContainer from '../ListContainer/ListContainer';

const data = [
   {
      id: 0,
      name: 'Иванов Иван',
      lastComment: 'Пиздец конечно, ща бы в 2018 не уметь в es6',
      plus: 0,
      minus: 4
   },
   {
      id: 1,
      name: 'Андреев Андрей',
      lastComment: 'Пиздец конечно саня может в es6',
      plus: 3,
      minus: 2
   },
   {
      id: 2,
      name: 'Петров Петр',
      lastComment: 'Пиздец конечно, петя не умеет в es6',
      plus: 2,
      minus: 3
   },
   {
      id: 3,
      name: 'Александров Александр',
      lastComment:
         'Пиздец конечно, андрюша наполовину что тут даже хз может он или нет',
      plus: 1,
      minus: 1
   }
];

const columns = [
   {
      field: 'name',
      title: 'Имя'
   },
   {
      field: 'lastComment',
      title: 'Важно знать'
   },
   {
      field: 'plus',
      title: 'плюсики',
      canSort: true
   },
   {
      field: 'minus',
      title: 'минусики',
      canSort: true
   }
];

class MainInfo extends Component {
   render() {
      return (
         <div className="MainInfo">
            <div className="App-intro">
               <ListContainer items={data} columns={columns} />
            </div>
         </div>
      );
   }
}

export default MainInfo;
