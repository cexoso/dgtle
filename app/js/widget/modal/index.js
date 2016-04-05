import React ,{PropTypes} from 'react';
import Interface from "widget/interface.jsx";
import Hammer from 'react-hammerjs';
import Cn from "./modal.scss";
console.log(Cn)
console.log(Hammer)
class Modal extends Interface {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show || false
        }
    }
    componentWillReceiveProps(props) {
        const {show} = props;
        this.setState({show});
    }
    onTapHandle() {
        const {show} = this.state;
        const {onChange} = this.props;
        if (onChange instanceof Function) {
            const result = onChange(show);
            if (result !== undefined && result !== show) {
                this.setState({show: result});
            }
        } else {
            this.setState({show: !show});
        }
    }
    render() {
        const c = this.props.children;
        const {show} = this.state;
        return (
            <Hammer onTap={this.onTapHandle.bind(this)}>
                <div className={`${Cn.Modal} ${show ? Cn.show : Cn.hide}`}>
                    {c ? <div className={`${Cn['pup-up']}`}>{c}</div> : ""}
                </div>
            </Hammer>
        )
    }

}

Modal.propTypes = {
    /**
        使用onChange会使组件的状态受限
        onChange(isShow)：nextvalue 返回一个状态表征modal是否应该显示
    */
    onChange: PropTypes.func,
    /**
        show值会一直映射show状态
    */
    show: PropTypes.bool,
    /**
        onShow当控件显示时 outHandle 的一个语法糖
        当show从false->true的时候触发
    */
    onShow: PropTypes.func,
    /**
        参照onShow
    */
    onHide: PropTypes.func,
}

export default Modal;
