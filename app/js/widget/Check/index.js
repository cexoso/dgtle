import React, {Component, PropTypes} from 'react';
class Check extends Component {
    constructor(props) {
        super(props);
        this.State = {

        }
    }
    componentDidMount() {
        console.log(123)
    }
    render() {
        return (<div>
            <div>
                hello
            </div>
        </div>)
    }
}

Check.propTypes = {
    onChange: PropTypes.func
}
export default Check;
