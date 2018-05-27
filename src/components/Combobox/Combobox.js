import React, { Component } from 'react';
import './Combobox.css';
import List from '../List/List';
import classNames from 'classnames';

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
      const inputText = event.target.value;

      if (inputText.length >= 3) {
         items = this.searchItems(inputText);
      }
      this.setState({
         items,
         inputText,
         selectedItem: null
      });
      this.selectedItemChangeHandler(null);
   };

   searchItems = text => {
      return this.props.items.filter(item => {
         return item[this.props.searchProperty].indexOf(text) !== -1;
      });
   };

   onItemSelect = item => {
      this.setState({
         selectedItem: item,
         inputText: item[this.props.searchProperty]
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
      const comboboxClass = classNames({
         Combobox: true,
         Combobox__success: selectedItem
      });
      return (
         <div className={comboboxClass}>
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
