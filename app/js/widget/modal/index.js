import React ,{PropTypes} from 'react';
import Interface from "widget/interface.jsx";
import Hammer from 'react-hammerjs';
import Cn from "./modal.scss";
class Modal extends Interface {
    constructor(props) {
        super(props);
        this.state = {
            modalShow: props.modalShow || false,
            show: props.show || false,
        }
    }
    componentWillReceiveProps(props) {
        const {modalShow,show} = props;
        const {modalShow: mshow,show: sshow} = this.state;
        if (mshow !== modalShow || sshow !== show) {
            this.setState({modalShow,show});
        }
    }
    onTapHandle() {
        const {modalShow,show} = this.state;
        const {onChange} = this.props;
        if (onChange instanceof Function) {
            const result = onChange({modalShow,show});
            if (result !== undefined && (result.modalShow !== modalShow || result.show !== show)) {                
                this.setState(result);
            }
        } else {
            this.setState({modalShow: !modalShow,show: !show});
        }
    }
    render() {
        const c = this.props.children;
        const {modalShow,show} = this.state;
        return (
            <div>
                <Hammer onTap={this.onTapHandle.bind(this)}>
                    <div className={`${Cn.Modal} ${modalShow ? Cn.show : Cn.hide}`}></div>
                </Hammer>
                {c ? <div className={`${Cn['pup-up']} ${show ? Cn.show : Cn.hide}`}>{c}</div> : ""}
            </div>
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
        modalShow值会一直映射modalShow状态
    */
    modalShow: PropTypes.bool,
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
