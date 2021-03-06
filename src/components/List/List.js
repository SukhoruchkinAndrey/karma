//@flow
import React from 'react';
import ListItem from '../ListItem/ListItem';
import ListHeader from '../ListHeader/ListHeader';
import type { BasicItem, Column } from '../ListItem/ListItem';

const List = ({
   items,
   columns,
   handleColumnClick,
   currentSortedColumn,
   currentSort,
   handleRowClick,
   className = '',
   showHeader = true
}: {
   items: Array<BasicItem>,
   columns: Array<Column>,
   handleColumnClick?: (columnName: string) => void,
   currentSortedColumn: string,
   currentSort: boolean,
   handleRowClick?: (item: BasicItem) => void,
   className?: string,
   showHeader?: boolean
}) => (
   <table className={className}>
      {showHeader && (
         <ListHeader
            columns={columns}
            handleColumnClick={handleColumnClick}
            currentSortedColumn={currentSortedColumn}
            currentSort={currentSort}
         />
      )}
      <tbody>
         {items.map(item => (
            <ListItem
               key={item.id}
               item={item}
               columns={columns}
               handleClick={handleRowClick}
            />
         ))}
      </tbody>
   </table>
);

export default List;
