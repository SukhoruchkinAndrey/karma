import React from 'react';
import ListItem from '../ListItem/ListItem';
import ListHeader from '../ListHeader/ListHeader';

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
      title: 'плюсики'
   },
   {
      field: 'minus',
      title: 'минусики'
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
