import React from 'react';
import Interface from "widget/interface.jsx";
import Hammer from 'react-hammerjs';
import Cn from "./Radio.scss";
const RadioManage = {
    manager: {},
    register(name,component) {
        let m = this.manager[name];//m should be an array
        if (m !== undefined) {
            if (m.indexOf(component) < 0) {
                m.push(component);
            }
        } else {
            m = [];
            m.push(component);
            this.manager[name] = m;
        }
    },
    deregister(name,component) {
        const m = this.manager[name];
        if (m !== undefined) {
            const index = m.indexOf(component);
            if (index > -1) {
                m.splice(index,1);
                return true;
            }
        }
        return false;
    },
    setMajor(name,component) {
        const m = this.manager[name];
        if (m !== undefined) {
            const index = m.indexOf(component);
            if (index > -1) {
                const major = m.lastMajor;
                if (major) {
                    major.uncheck();
                }
                component.check();
                m.lastMajor = component;
            }
        }
    }
}
console.log(RadioManage);
export default class Radio extends Interface {
    constructor(props) {
        super(props)
        this.state = {
            checked: props.checked || false
        }
        const {name} = props;
        RadioManage.register(name,this);
        console.log(RadioManage.manager)
    }
    componentWillReceiveProps(nextProps) {
        const {checked} = this.props;
        const {checked: nextchecked} = nextProps;
        if (nextchecked !== checked) {
            this.setState({checked: nextchecked});
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
    check() {
        console.log(this)
        console.log("check")
    }
    uncheck() {
        console.log(this)
        console.log("uncheck")
    }
    template(checked) {
        return (<div className={`${Cn.ios} ${checked ? Cn.checked : Cn.unchecked}`}>
            <div className={`${Cn.point}`}>
                {JSON.stringify(checked)}
            </div>
        </div>)
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
                <input style={{display: ""}} readOnly type="radio" {...{name,checked}} />
            </div>
        )
    }
}
