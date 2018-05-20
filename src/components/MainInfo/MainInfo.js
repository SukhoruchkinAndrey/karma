//@flow
import React, { Component } from 'react';
import './MainInfo.css';
import ListContainer from '../ListContainer/ListContainer';
import { Link } from 'react-router-dom';
import type { BasicItem } from '../ListItem/ListItem';

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

type MainInfoProps = {
   history: Array<string>
};

export type MainInfoItem = BasicItem & {
   lastComment: string,
   plus: ?number,
   minus: ?number
};

class MainInfo extends Component<MainInfoProps> {
   handleRowClick = (item: MainInfoItem) => {
      this.props.history.push(`/person/${item.id}`);
   };

   render() {
      return (
         <div className="MainInfo">
            <div className="App-intro">
               <Link to="/addComment">Добавить отзыв</Link>
               <ListContainer
                  items={data}
                  columns={columns}
                  handleRowClick={this.handleRowClick}
               />
            </div>
         </div>
      );
   }
}

export default MainInfo;
