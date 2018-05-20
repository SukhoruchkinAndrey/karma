//@flow
import React, { Component } from 'react';
import List from '../List/List';
import './ListContainer.css';
import type { BasicItem, Column } from '../ListItem/ListItem';

const sortItems = (
   items: Array<BasicItem>,
   sorting: boolean,
   columnName: string
) => {
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

type ListContainerState = {
   currentSortedColumn: string,
   currentSort: boolean,
   items: Array<BasicItem>,
   isLoading?: boolean
};

type ListContainerProps = {
   items: Array<BasicItem>,
   columns: Array<Column>,
   handleRowClick: (item: BasicItem) => void
};

class ListContainer extends Component<ListContainerProps, ListContainerState> {
   constructor(props: ListContainerProps) {
      super(props);

      this.state = {
         currentSortedColumn: '',
         currentSort: false,
         items: props.items
      };
   }

   handleColumnClick = (columnName: string) => {
      const { items, currentSort, currentSortedColumn } = this.state;
      const newSort = currentSortedColumn === columnName ? !currentSort : true;
      this.setState({ isLoading: true });
      sortItems(items, newSort, columnName).then(newItems => {
         this.setState({
            items: newItems,
            currentSort: newSort,
            currentSortedColumn: columnName,
            isLoading: false
         });
      });
   };

   render() {
      const { items, currentSort, currentSortedColumn, isLoading } = this.state;
      const { columns, handleRowClick } = this.props;

      return (
         <div className="ListContainer">
            {isLoading && <div className="ListContainer__loadingIndicator" />}
            <List
               items={items}
               columns={columns}
               currentSort={currentSort}
               currentSortedColumn={currentSortedColumn}
               handleColumnClick={this.handleColumnClick}
               handleRowClick={handleRowClick}
            />
         </div>
      );
   }
}

export default ListContainer;
