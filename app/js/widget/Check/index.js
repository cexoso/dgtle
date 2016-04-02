import React, {PropTypes} from 'react';
import Interface from "widget/interface.jsx";
import Hammer from 'react-hammerjs';
import Cn from "./Check.scss";
class Check extends Interface {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.value || false
        }
    }
    onTapHandle() {
        const {checked} = this.state;
        const {onChange} = this.props;
        if (onChange instanceof Function) {
            const result = onChange(checked);
            if (result !== undefined && result !== checked) {
                this.setState({checked: result});
            }
        } else {
            this.setState({checked: !checked});
        }
    }
    componentWillReceiveProps(nextProps) {
        const {value} = this.props;
        const {value: nextValue} = nextProps;
        if (nextValue !== value) {
            this.setState({checked: nextValue});
        }
    }
    render() {
        const style = {
            container: {
                display: "inline-block"
            }
        }
        const {checked} = this.state;
        return (
            <div {...this.props} style={style.container}>
                <Hammer onTap={this.onTapHandle.bind(this)}>
                    <div className={`${Cn.check} ${checked ? Cn.checked : ""}`}>
                        <div className={`${Cn.icon}`}></div>
                    </div>
                </Hammer>
            </div>
        )
    }
}

Check.propTypes = {
    /**
        使用onChange会使check的状态受限
        onChange(value)：nextvalue 输入当前选中状态 返回一个状态表征check是否被选中
    */
    onChange: PropTypes.func,
    /**
        value值会一直映射checked状态
    */
    value: PropTypes.bool
}
export default Check;
