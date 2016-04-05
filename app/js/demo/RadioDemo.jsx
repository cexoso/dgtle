import React, {Component} from 'react';
import Radio from "widget/Radio";
import {toJSON} from "base/devUtil"

import "./demo.scss";
const radioController = {
    outHandle(widget) {
        const {checked} = widget.state;
        if (checked === true) {
            const {name,value} = widget.props;
            const o = Object.assign({},this.state);
            o.Radio[name] = value;
            this.setState(o);
        }
    }
}
class RadioDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Check: {
                save: false,
                remember: true,
                ios: true
            },
            Radio: {
                description: null
            }
        }
    }
    render() {
        const style = {
            display: {
                margin: "20px auto",
                padding: "0 10px"
            }
        }
        return (
            <div>
                <h1>Radio</h1>
                <div style={style.display}>
                    <h6>自定义风格</h6>
                    <span>
                        {toJSON(this.state.Radio)}
                    </span>
                    <div style={style.display}>
                        <div className="item">
                            <p className="descript">
                                <span style={{verticalAlign: "middle"}}>无法通过手机号找到我</span>
                                <Radio name={"description"} value={"case1"} checked
                                    className="weui-radio"
                                    outHandle={radioController.outHandle.bind(this)}
                                />
                            </p>
                        </div>
                        <div className="item">
                            <p className="descript">
                                <span style={{verticalAlign: "middle"}}>无法通过QQ号找到我</span>
                                <Radio name={"description"} value={"case2"}
                                    className="weui-radio"
                                    outHandle={radioController.outHandle.bind(this)}
                                />
                            </p>
                        </div>
                        <div className="item">
                            <p className="descript">
                                <span style={{verticalAlign: "middle"}}>我得到的二维码无法识别</span>
                                <Radio name={"description"} value={"case3"}
                                    className="weui-radio"
                                    outHandle={radioController.outHandle.bind(this)}
                                />
                            </p>
                        </div>
                        <div className="item">
                            <p className="descript">
                                <span style={{verticalAlign: "middle"}}>无辜被陌生人成功添加好友</span>
                                <Radio name={"description"} value={"case4"}
                                    className="weui-radio"
                                    outHandle={radioController.outHandle.bind(this)}
                                />
                            </p>
                        </div>
                        <div className="item">
                            <p className="descript">
                                <span style={{verticalAlign: "middle"}}>其它</span>
                                <Radio name={"description"} value={"case5"}
                                    className="weui-radio"
                                    outHandle={radioController.outHandle.bind(this)}
                                />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default RadioDemo;
