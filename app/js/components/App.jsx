import React, {Component} from 'react';
import Check from "widget/Check";
import Radio from "widget/Radio";
import {toJSON} from "base/devUtil"
import "../../css/display.scss";

import IosCheck from "widget/Check/IosCheck.jsx";
const checkController = {
    outHandle(widget) {
        const {state: ws, props} = widget;
        const {Check: ck} = this.state;
        const o = {};
        o[props.name] = ws.checked;
        this.setState({Check: Object.assign({}, ck, o)});
    },
    onChangeHandle(checked) {
        const time = Date.now();
        if (time / 1000 % 10 < 5) {
            checked = !checked;
        }
        return checked;
    }
}
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
class Display extends Component {
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
        const {save, remember,limit,ios} = this.state.Check;
        return (
            <div>
                <div className="demo">
                    <h1>Check</h1>
                    <div style={style.display}>
                        <h6>不受限的check</h6>
                        <span>
                            {toJSON(this.state.Check)}
                        </span>
                        <div style={style.display}>
                            <Check className="font" name={"save"} checked={save}
                                outHandle={checkController.outHandle.bind(this)}
                            />
                            <span className="font">保存密码</span>
                        </div>
                        <div style={style.display}>
                            <Check className="font" name={"remember"} checked={remember}
                                outHandle={checkController.outHandle.bind(this)}
                            />
                            <span className="font">记住我</span>
                        </div>
                        <div style={style.display}>
                            <Check className="font" name={"remember"} checked={remember}
                                outHandle={checkController.outHandle.bind(this)}
                            />
                            <span className="font">被记住我同步</span>

                        </div>
                    </div>
                    <div style={style.display}>
                        <h6>受限的check</h6>
                        <div style={style.display}>
                            <Check className="font" name={"limit"} checked={limit}
                                onChange={checkController.onChangeHandle.bind(this)}
                                outHandle={checkController.outHandle.bind(this)}
                            />
                            <span className="font">受限</span>
                        </div>
                    </div>
                    <div style={style.display}>
                        <h6>自定义风格</h6>
                        <div style={style.display}>
                            <IosCheck name={"ios"} checked={ios}
                                outHandle={checkController.outHandle.bind(this)}
                            />
                            <span className="font">ios风格</span>
                        </div>
                    </div>
                </div>
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
export default Display;
