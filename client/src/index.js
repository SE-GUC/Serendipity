 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './MemberApp';
import * as serviceWorker from './serviceWorker';
import './index.css';
import EduOrg from './EduOrg';



ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();

//ReactDOM.render(<EduOrg />, document.getElementById('root'));
