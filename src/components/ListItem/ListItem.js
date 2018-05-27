//@flow
import React from 'react';

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
   item: BasicItem,
   columns: Array<Column>,
   handleClick: (item: BasicItem) => void
}) => (
   <tr
      className="listItem"
      onClick={handleClick ? () => handleClick(item) : null}
   >
      {columns.map(column => (
         <td key={column.field}>{item[column.field].toString()}</td>
      ))}
   </tr>
);

export default ListItem;
