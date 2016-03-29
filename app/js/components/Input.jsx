import React, {Component} from 'react';
class Input extends Component {
    constructor(props){
        super(props);
        this.state={
            v:props.v||""
        }
        let outHandle=props.outHandle;
        if(outHandle instanceof Function){
            let setState=this.setState;
            this.setState=(function(){
                return function(){
                    let last=arguments[arguments.length];
                    if(last instanceof Function){
                        arguments[arguments.length]=function(){
                            last.apply(this,arguments);
                            outHandle.call(this,this.state);
                        }
                    }else{
                        Array.prototype.push.call(arguments,function(){
                            outHandle.call(this,this.state);
                        });
                    }
                    setState.apply(this,arguments);
                }
            })();
        }
    }
    changeHandle(e){
        let v=String.prototype.toUpperCase.apply(e.target.value)
        this.setState({
            v:v
        })
    }
    render() {
        let v=this.state.v;
        return (
            <div>
                <input type="text" value={v} onChange={this.changeHandle.bind(this)}/>
                <span style={{paddingLeft:"10px"}}>{v.length}</span>
            </div>
        )
    }
}
export default Input;
