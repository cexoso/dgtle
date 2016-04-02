import React, {Component} from 'react';
import Check from "widget/Check";
import "../../css/display.scss";

import {toString} from "base/devUtil";
const checkController = {
    outHandle(widget) {
        const {state: ws, props} = widget;
        const {Check: ck} = this.state;
        const o = {};
        o[props.name] = ws.checked;
        this.setState({Check: Object.assign({}, ck, o)});
    },
    onChangeHandle(value) {
        const time = Date.now();
        if (time / 1000 % 10 < 5) {
            value = !value;
        }
        return value;
    }
}
class Display extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Check: {
                save: false,
                remember: true
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
        const {save, remember,limit} = this.state.Check;
        return (
            <div>
                <div className="demo">
                    <h1>Check</h1>
                    <div style={style.display}>
                        <h6>不受限的check</h6>
                        <div style={style.display}>
                            <Check className="font" name={"save"} value={save}
                                outHandle={checkController.outHandle.bind(this)}
                            />
                            <span className="font">保存密码</span>
                        </div>
                        <div style={style.display}>
                            <Check className="font" name={"remember"} value={remember}
                                outHandle={checkController.outHandle.bind(this)}
                            />
                            <span className="font">记住我</span>
                        </div>
                        <div style={style.display}>
                            <Check className="font" name={"remember"} value={remember}
                                outHandle={checkController.outHandle.bind(this)}
                            />
                            <span className="font">被记住我同步</span>

                        </div>
                    </div>
                    <div style={style.display}>
                        <h6>受限的check</h6>
                        <div style={style.display}>
                            <Check className="font" name={"limit"} value={limit}
                                onChange={checkController.onChangeHandle.bind(this)}
                                outHandle={checkController.outHandle.bind(this)}
                            />
                            <span className="font">受限</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Display;
