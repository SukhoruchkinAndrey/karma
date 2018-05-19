import React from 'react';
import ListItem from '../ListItem/ListItem';
import ListHeader from '../ListHeader/ListHeader';

const List = ({
   items,
   columns,
   handleColumnClick,
   currentSortedColumn,
   currentSort,
   handleRowClick
}) => (
   <table>
      <ListHeader
         columns={columns}
         handleColumnClick={handleColumnClick}
         currentSortedColumn={currentSortedColumn}
         currentSort={currentSort}
      />
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
