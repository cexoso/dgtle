import React, {PropTypes} from 'react';
import Interface from "widget/interface.jsx";
import Hammer from 'react-hammerjs';
import Cn from "./Check.scss";
class Check extends Interface {
    constructor(props) {
        super(props);
        this.state = {
            checked: props.checked || false
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
        const {checked} = this.props;
        const {checked: nextchecked} = nextProps;
        if (nextchecked !== checked) {
            this.setState({checked: nextchecked});
        }
    }
    render() {
        const style = {
            container: {
                display: "inline-block",
                verticalAlign: "middle"
            }
        }
        const {checked} = this.state;
        const {name} = this.props;
        return (
            <div {...this.props} style={style.container}>
                <Hammer onTap={this.onTapHandle.bind(this)}>
                    {this.template(checked)}
                </Hammer>
                <input style={{display: "none"}} type="checkbox" readOnly {...{name,checked}} />
            </div>
        )
    }
    template(checked) {
        return (<div className={`${Cn.check} ${checked ? Cn.checked : ""}`}>
            <div className={`${Cn.icon}`}></div>
        </div>)
    }
}

Check.propTypes = {
    /**
        使用onChange会使check的状态受限
        onChange(checked)：nextchecked 输入当前选中状态 返回一个状态表征check是否被选中
    */
    onChange: PropTypes.func,
    /**
        checked值会一直映射checked状态
    */
    checked: PropTypes.bool,
    /**
        name属性映射input name
    */
    name: PropTypes.string
}
export default Check;
