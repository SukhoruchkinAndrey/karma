import React from 'react';
import './ListItem.css';

const ListItem = ({ item, columns }) =>
   <tr className="listItem">
      {columns.map(column => <td key={column.field}>{item[column.field]}</td>)}
   </tr>;


export default ListItem;
