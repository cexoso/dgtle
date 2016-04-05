import React, {Component} from 'react';
import Modal from "widget/Modal";
import {toJSON} from "base/devUtil"
import "./demo.scss";

class ModalDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }
    clickHandle() {
        const {show} = this.state;
        this.setState({
            show: !show
        })
    }
    render() {
        return (
            <Modal onTap={()=>{}}
                onShow={()=>{}}
                onHide={()=>{}}
                onChange={(s)=>{!s}}
                show={this.state.show}
            >
                <div onClick={this.clickHandle.bind(this)}>{toJSON(this.state)}</div>
            </Modal>
        )
    }
}
export default ModalDemo;
