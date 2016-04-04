import React, {Component} from 'react';
import Check from "widget/Check";
import Radio from "widget/Radio";
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
        console.log(widget)
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
                    <div style={style.display}>
                        <Radio name={"ios"} value={"人"} checked
                            outHandle={radioController.outHandle.bind(this)}
                        />
                        <Radio name={"ios"} value={"妖"}
                            outHandle={radioController.outHandle.bind(this)}
                        />
                        <Radio name={"ios"} value={"人妖"}
                            outHandle={radioController.outHandle.bind(this)}
                        />
                        <span className="font">ios风格</span>
                    </div>
                </div>
            </div>
        )
    }
}
export default Display;
