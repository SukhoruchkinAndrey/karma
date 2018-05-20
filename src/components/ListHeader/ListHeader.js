//@flow
import React from 'react';
import './ListHeader.css';
import type { Column } from '../ListItem/ListItem';

const ListHeader = ({
   columns,
   handleColumnClick,
   currentSortedColumn,
   currentSort
}: {
   columns: Array<Column>,
   handleColumnClick: (columnField: string) => void,
   currentSortedColumn: string,
   currentSort: boolean
}) => (
   <thead className="listHead">
      <tr>
         {columns.map(column => (
            <th
               className={
                  currentSortedColumn === column.field
                     ? currentSort
                        ? 'listHeader__column_asc'
                        : 'listHeader__column_desc'
                     : ''
               }
               onClick={
                  column.canSort ? () => handleColumnClick(column.field) : null
               }
               key={column.field}
            >
               {column.title}
            </th>
         ))}
      </tr>
   </thead>
);

export default ListHeader;
