//@flow
import React from 'react';
import './ListItem.css';

export type BasicItem = {
   id: number,
   name: string,
   ...any
};

export type Column = {
   field: string,
   title: string,
   canSort?: boolean
};

const ListItem = ({
   item,
   columns,
   handleClick
}: {
   item: ListItem,
   columns: Array<Column>,
   handleClick: (item: ListItem) => void
}) => (
   <tr className="listItem" onClick={() => handleClick(item)}>
      {columns.map(column => <td key={column.field}>{item[column.field]}</td>)}
   </tr>
);

export default ListItem;
