import React, {Component} from 'react'
function _(C) {
    return class Timeout extends Component {
        constructor(props) {
            super(props)
        }
        componentWillMount() {
            this.Id = null;
        }
        clear(){
            if(this.Id){
                window.clearTimeout(this.Id);
            }
        }
        componentWillUnmount() {
            this.clear();
        }
        setTimeout() {
            this.clear();
            let a=window.setTimeout.apply(null, arguments);
            this.Id=a;
        }
        render() {
            return (
                <C {...this.props} setTimeout={this.setTimeout.bind(this)} clear={this.clear.bind(this)}></C>
            )
        }
    }
}

export default _;
