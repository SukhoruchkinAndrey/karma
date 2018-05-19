import React, { Component } from 'react';
import List from '../List/List';
import './ListContainer.css';
const sortItems = (items, sorting, columnName) => {
   const newItems = items.sort(
      (firstItem, secondItem) =>
         sorting
            ? firstItem[columnName] - secondItem[columnName]
            : secondItem[columnName] - firstItem[columnName]
   );
   return new Promise(resolve => {
      setTimeout(() => {
         resolve(newItems);
      }, 1000);
   });
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
      this.setState({     isLoading: true      });
      sortItems(items, newSort, columnName).then(newItems => {
         this.setState(prevState => ({
            items: newItems,
            currentSort: newSort,
            currentSortedColumn: columnName,
            isLoading: false
         }));
      });
   };

   render() {
      const { items, currentSort, currentSortedColumn, isLoading } = this.state;
      const { columns } = this.props;

      return (
         <div className="ListContainer">
            {isLoading && <div className="ListContainer__loadingIndicator"></div>}
            <List
               items={items}
               columns={columns}
               currentSort={currentSort}
               currentSortedColumn={currentSortedColumn}
               handleColumnClick={this.handleColumnClick}
            />
         </div>
      );
   }
}

export default ListContainer;
