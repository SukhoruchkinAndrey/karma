import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Application from './components/Application/Application';

ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();
