import React from "react";
import {render} from 'react-dom';

//react-redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reduce from './reduce.jsx';

//router
import {Router,Route,IndexRoute,hashHistory} from 'react-router';

//components
import Index from './components/Index.jsx';
import Test from './components/Test.jsx';
//base css
import '../base.scss';
let store = createStore(reduce);
let rootElement = document.getElementById('container');
render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <IndexRoute component={Index}/>
                <Route path="test" component={Test}/>
            </Route>
        </Router>
    </Provider>
), rootElement);
