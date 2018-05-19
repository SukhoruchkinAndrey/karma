import React, { Component } from 'react';
import List from '../List/List';

const sortItems = (items, sorting, columnName) => {
   const newItems = items.sort(
      (firstItem, secondItem) =>
         sorting
            ? firstItem[columnName] - secondItem[columnName]
            : secondItem[columnName] - firstItem[columnName]
   );
   return Promise.resolve(newItems);
};

class ListContainer extends Component {
   constructor(props) {
      super(props);

      this.state = {
         currentSortedColumn: '',
         currentSort: false,
         items: props.items
      };
   }

   handleColumnClick = columnName => {
      const { items, currentSort, currentSortedColumn } = this.state;
      const newSort = currentSortedColumn === columnName ? !currentSort : true;
      sortItems(items, newSort, columnName).then(newItems => {
         this.setState(prevState => ({
            items: newItems,
            currentSort: newSort,
            currentSortedColumn: columnName
         }));
      });
   };

   render() {
      const { items, currentSort, currentSortedColumn } = this.state;
      const { columns } = this.props;

      return (
         <List
            items={items}
            columns={columns}
            currentSort={currentSort}
            currentSortedColumn={currentSortedColumn}
            handleColumnClick={this.handleColumnClick}
         />
      );
   }
}

export default ListContainer;
