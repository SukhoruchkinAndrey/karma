import React from 'react';
import ListItem from "../ListItem/ListItem";

const columns = ['name', 'lastComment', 'plus', 'minus']

const List = function({ items }) {
   return <table>{items.map(item => <ListItem key={item.id} item={item} columns={columns}/>)}</table>;
};

export default List;
