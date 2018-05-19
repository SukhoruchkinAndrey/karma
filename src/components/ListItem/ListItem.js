import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({ item, columns }) => (
   <tr className="listItem">
      {columns.map(column => <td key={column.field}>{item[column.field]}</td>)}
   </tr>
);
ListItem.propTypes = {
   item: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      lastComment: PropTypes.string.isRequired,
      plus: PropTypes.number,
      minus: PropTypes.number
   }).isRequired
};

export default ListItem;
