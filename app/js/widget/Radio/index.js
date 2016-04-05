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
            const major = m.lastMajor;
            if (index > -1) {
                if (major === component) {
                    m.lastMajor = null;
                }
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
export default class Radio extends Interface {
    constructor(props) {
        super(props)
        this.state = {
            checked: props.checked || false
        }
    }
    componentDidMount() {
        const {name} = this.props;
        RadioManage.register(name,this);
        this.state.checked && RadioManage.setMajor(name,this);
    }
    componentWillUnmount() {
        const {name} = this.props;
        RadioManage.deregister(name,this);
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
        const {onChange,name} = this.props;
        if (onChange instanceof Function) {
            const result = onChange(checked);
            if (result !== undefined && result !== checked) {
                RadioManage.setMajor(name,this);
            }
        } else {
            RadioManage.setMajor(name,this);
        }
    }
    check() {
        this.setState({checked: true});
    }
    uncheck() {
        this.setState({checked: false});
    }
    template(checked) {
        return (<span className={`${Cn.Radio} ${checked ? Cn.checked : Cn.unchecked}`}>
            <span className={`${Cn.point}`}>
            </span>
        </span>)
    }
    render() {
        const {checked} = this.state;
        const {name,value} = this.props;
        return (
            <span {...this.props}>
                <Hammer onTap={this.onTapHandle.bind(this)}>
                    {this.template(checked)}
                </Hammer>
                <input style={{display: "none"}} readOnly type="radio" {...{name,checked,value}} />
            </span>
        )
    }
}
