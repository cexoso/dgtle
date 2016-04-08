import React, {Component} from 'react';
import Alert from "widget/Modal/Alert.jsx";
import "./demo.scss";
class AlertController {
    constructor(show = true) {
        this.show = show;
    }
}
class ModalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
        this.controller = {
            AlertController: new AlertController()
        }
    }
    clickHandle() {
        const {show} = this.state;
        console.log('clickHandle')
        this.setState({
            show: !show
        })
    }
    render() {
        return (

            <Alert show={this.state.show}
                canModalCancel={false}
            />
        )
    }
}
export default ModalDemo;
