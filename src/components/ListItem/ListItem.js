import React from 'react';
import './ListItem.css';

const ListItem = function({ item, columns }) {
   return <tr className="listItem" >{columns.map(column => <td key={column}>{item[column]}</td>)}</tr>;
};

export default ListItem;
