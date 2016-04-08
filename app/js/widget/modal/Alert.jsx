import React,{PropTypes} from 'react';
import Modal from "widget/Modal";
import Interface from "widget/interface.jsx";
import Cn from "./modal.scss";

class Alert extends Interface {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show || false
        }
    }
    componentWillReceiveProps(props) {
        const {show} = props;
        const {show: sshow} = this.state;
        if (sshow !== show) {
            this.setState({show});
        }
    }
    clickHandle() {
        const {show} = this.state;
        console.log('clickHandle')
        this.setState({
            show: !show
        })
    }
    onModalCancel(o) {
        const {modalShow,show} = o;
        let {canModalCancel} = this.props;
        canModalCancel = canModalCancel !== undefined ? canModalCancel : true;
        if (!canModalCancel) {
            return undefined;
        }
        return {show: !show,modalShow: !modalShow};
    }
    template() {
        return (<div className={`${Cn.alert}`}>
            <div className={`${Cn.head}`}>
                弹窗标题
            </div>
            <div className={`${Cn.body}`}>
                弹窗内容，告知当前页面信息弹窗内容，告知当前页面信息弹窗内容，告知当前页面信息弹窗内容，告知当前页面信息弹窗内容，告知当前页面信息弹窗内容，告知当前页面信息
            </div>
            <div className={`${Cn.foot}`}>
                <button className={`${Cn.btn}`}>我知道了</button>
            </div>
        </div>)
    }
    render() {
        let {hasModal} = this.props;
        hasModal = hasModal !== undefined ? hasModal : true;//是否有遮罩 default:true
        const {show} = this.state;
        const modalShow = hasModal ? show : false;
        return (
            <Modal onTap={()=>{}}
                onShow={()=>{
                    console.log('onShow')
                }}
                onHide={()=>{
                    console.log('onHide')
                }}
                onChange={this.onModalCancel.bind(this)}
                outHandle={(s)=>{
                    const {show: ModalShow} = s.state;
                    this.setState({show: ModalShow});
                }}
                show={show}
                modalShow={modalShow}
            >
                {this.template()}
            </Modal>
        )
    }
}
Alert.propTypes = {
    /**
        是否有遮罩 default:true
    */
    hasModal: PropTypes.bool,
    /**
        点击遮罩是否能够关闭 default:true
    */
    canModalCancel: PropTypes.bool,
}
export default Alert;
