import React,{Component} from "react";
import {render} from 'react-dom';
//router
import {Router, Route, IndexRedirect, Link ,hashHistory} from 'react-router';
//components
import CheckDemo from './demo/CheckDemo.jsx';
import RadioDemo from './demo/RadioDemo.jsx';
import ModalDemo from './demo/ModalDemo.jsx';
//base css
import '../base.scss';

const rootElement = document.getElementById('container');
class App extends Component {
    constructor() {
        super();
        this.a = 1;
    }
    render() {
        return (<ul style={{fontSize: "20px"}}>
            <li>
                <Link to="checkDemo">
                    <span>
                        checkDemo
                    </span>
                </Link>
            </li>
            <li>
                <Link to="radioDemo">
                    <span>
                        radioDemo
                    </span>
                </Link>
            </li>
            <li>
                <Link to="modalDemo">
                    <span>
                        modalDemo
                    </span>
                </Link>
            </li>
        </ul>)
    }
}
render((
    <Router history={hashHistory}>
        <Route path="/">
            <IndexRedirect to="/App" />
            <Route path="checkDemo" component={CheckDemo} />
            <Route path="radioDemo" component={RadioDemo} />
            <Route path="modalDemo" component={ModalDemo} />
            <Route path="*" component={App} />
        </Route>
    </Router>

), rootElement);
