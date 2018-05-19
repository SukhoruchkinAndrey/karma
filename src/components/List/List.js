import React from 'react';
import ListItem from '../ListItem/ListItem';
import ListHeader from '../ListHeader/ListHeader';

const columns = [
   {
      field: 'name',
      title: 'Имя',
      sort: null
   },
   {
      field: 'lastComment',
      title: 'Важно знать',
      sort: null
   },
   {
      field: 'plus',
      title: 'плюсики',
      sort: null
   },
   {
      field: 'minus',
      title: 'минусики',
      sort: null
   }
];

const List = ({ items }) => (
   <table>
      <ListHeader columns={columns} />
      <tbody>
         {items.map(item => (
            <ListItem key={item.id} item={item} columns={columns} />
         ))}
      </tbody>
   </table>
);

export default List;
