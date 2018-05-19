import React from 'react';

const ListHeader = ({ columns }) =>
   <thead className="listHead">
      <tr>
         {columns.map(column => <th key={column.field}>{column.title}</th>)}
      </tr>
   </thead>;


export default ListHeader;
