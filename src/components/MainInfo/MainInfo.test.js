import React from 'react';
import ReactDOM from 'react-dom';
import MainInfo from './MainInfo';

it('renders without crashing', () => {
   const div = document.createElement('div');
   ReactDOM.render(<MainInfo />, div);
   ReactDOM.unmountComponentAtNode(div);
});
