import React, {Component} from 'react'
function _(C){
  return class Interval extends Component {
    constructor(props) {
      super(props)
    }
    componentWillMount(){
      this.intervalArray=new Array();
    }
    componentWillUnmount() {
      this.intervalArray.map(window.clearInterval);
    }
    setInterval(){
      var a=window.setInterval.apply(null,arguments);
      this.intervalArray.push(a);
    }
    render() {
      return (
        <C {...this.props} setInterval={this.setInterval.bind(this)}></C>
      )
    }
  }
}

export default _;
