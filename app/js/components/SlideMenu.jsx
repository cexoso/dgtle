import React, {Component, PropTypes} from 'react';
class SlideMenu extends Component {
    render() {
        return <div className="container">
            <div className="left"></div>
            <div>
                {this.props.children}
            </div>
        </div>
    }
}
SlideMenu.PropTypes={
    handleComponent:PropTypes.func.isRequired
}
export default SlideMenu;
