import React, {Component} from 'react';
import Input from './Input.jsx';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: 'a'
                }, {
                    name: 'b'
                }, {
                    name: 'c'
                }, {
                    name: 'd'
                }, {
                    name: 'e'
                }
            ]
        }
    }
    changeHandle(src, des) {
        des.value = src.v
        this.setState({});
    }
    render() {
        let list = this.state.list;
        return (
            <div style={{textAlign:"center",marginTop:"100px"}}>
                <Input outHandle={(state) => {
                    this.changeHandle(state, list[0])
                }}/>
                <Input outHandle={(state) => {
                    this.changeHandle(state, list[1])
                }}/>
                <Input outHandle={(state) => {
                    this.changeHandle(state, list[2])
                }}/>
                <Input outHandle={(state) => {
                    this.changeHandle(state, list[3])
                }}/>
                <Input outHandle={(state) => {
                    this.changeHandle(state, list[4])
                }}/>
                {JSON.stringify(list)}
            </div>
        )
    }
}
export default Test;
