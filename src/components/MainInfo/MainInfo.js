//@flow
import React, { Component } from 'react';
import './MainInfo.css';
import ListContainer from '../ListContainer/ListContainer';
import { Link } from 'react-router-dom';
import type { BasicItem } from '../ListItem/ListItem';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const READ_PERSONS = gql`
   query {
      allPersons {
         id
         name
         comments {
            isPositive
            text
         }
      }
   }
`;

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

export type MainInfoItem = BasicItem & {
   lastComment: string,
   plus: ?number,
   minus: ?number
};

type MainInfoProps = {
   items: Array<MainInfoItem>,
   history: Array<string>
};

class MainInfo extends Component<MainInfoProps> {
   handleRowClick = (item: MainInfoItem) => {
      this.props.history.push('/person/' + item.id);
   };

   prepareItems = persons => {
      return persons.map(({ id, name, comments }) => {
         const newItem = {
            id,
            name,
            lastComment: comments[comments.length - 1].text,
            isPositive: comments[comments.length - 1].isPositive,
            plus: 0,
            minus: 0
         };
         comments.forEach(item => {
            item.isPositive ? newItem.plus++ : newItem.minus++;
         });
         return newItem;
      });
   };

   render() {
      return (
         <Query query={READ_PERSONS}>
            {({ data, loading }) => {
               if (loading) return 'Loading...';
               return (
                  <div className="MainInfo">
                     <Link to="/addComment">Добавить отзыв</Link>
                     <ListContainer
                        items={this.prepareItems(data.allPersons)}
                        columns={columns}
                        handleRowClick={this.handleRowClick}
                     />
                  </div>
               );
            }}
         </Query>
      );
   }
}

export default MainInfo;
