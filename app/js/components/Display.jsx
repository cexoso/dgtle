import React, {Component} from 'react';
import Check from "widget/Check";
class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className="demo">
                    <h1>Check</h1>
                    <h6>不受限check</h6>
                    <Check />
                </div>
            </div>
        )
    }
}
export default Display;
