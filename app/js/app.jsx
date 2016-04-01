import React from "react";
import {render} from 'react-dom';

//react-redux
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reduce from './reduce.jsx';

//router
import {Router,Route,IndexRedirect,hashHistory} from 'react-router';

//components
import Index from './components/Index.jsx';
import Test from './components/Test.jsx';
import Display from './components/Display.jsx';
//base css
import '../base.scss';
let store = createStore(reduce);
const rootElement = document.getElementById('container');
render((
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/">
                <IndexRedirect to="/display" />
                <Route path="index" component={Index} />
                <Route path="test" component={Test} />
                <Route path="display" component={Display} />
            </Route>
        </Router>
    </Provider>
), rootElement);
