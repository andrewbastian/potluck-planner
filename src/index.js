import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import loginPage from './Components/loginPage';
import registerPage from './Components/registerPage';
import CreateEvent from './Components/CreateEvent';


import './index.css';

import App from './App';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/register" component={registerPage}/>
            <Route  exact path="/login_page" component={loginPage} />
            <Route path='/create_event' component={CreateEvent}/>
        </div>
    </Router>, document.getElementById('root')
);
