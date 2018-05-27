import React, { Component } from 'react';
import './Combobox.css';
import List from '../List/List';

class Combobox extends Component {
   constructor(props) {
      super(props);
      this.state = {
         items: [],
         inputText: '',
         selectedItem: null
      };
   }

   onInputValueChange = event => {
      let items = [];
      const value = event.target.value;

      if (value.length >= 3) {
         items = this.searchItems(value);
      }
      this.setState({
         items: items,
         inputText: value,
         selectedItem: null
      });
      this.selectedItemChangeHandler(null);
   };

   searchItems = text => {
      return this.props.items.filter(item => {
         return item.title.indexOf(text) !== -1;
      });
   };

   onItemSelect = item => {
      this.setState({
         selectedItem: item,
         inputText: item.title
      });
      this.selectedItemChangeHandler(item);
   };

   selectedItemChangeHandler = item => {
      if (typeof this.props.selectHandler === 'function') {
         this.props.selectHandler(item);
      }
   };

   render() {
      const { searchProperty } = this.props;
      const { items, inputText, selectedItem } = this.state;
      return (
         <div
            className={'Combobox ' + (selectedItem ? 'Combobox__success' : '')}
         >
            <input
               className="Combobox__input"
               value={inputText}
               onChange={this.onInputValueChange}
            />
            {!!items.length &&
               !selectedItem && (
                  <div className="Combobox__popup">
                     <List
                        items={items}
                        columns={[{ field: searchProperty }]}
                        showHeader={false}
                        className="Combobox__list"
                        handleRowClick={this.onItemSelect}
                     />
                  </div>
               )}
         </div>
      );
   }
}

export default Combobox;
