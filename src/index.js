import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import store from './redux/store';
import Login from './view/login/login';
import NotFound from './view/404/404';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
			<Switch>
				<Route match='match' path="/app" component={App} />
				<Route exact path="/login" component={Login} />
				<Redirect exact from='/' to='/app'/>
				<Route component={NotFound} />	 
			</Switch>
		</BrowserRouter>
    </Provider>
, document.getElementById('root'));
registerServiceWorker();
