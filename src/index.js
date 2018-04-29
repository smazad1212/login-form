import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import registerServiceWorker from './registerServiceWorker';

import './index.css';

ReactDOM.render(<LoginForm />, document.getElementById('root'));
registerServiceWorker();
