import React, {Component,PropTypes} from 'react';
import enhance from "../hoc/Timeout.jsx";
import {connect} from "react-redux";
let style={
    div:{
        width:"100%",
        overflow:"hidden"
    },
    ul:{
        whiteSpace:"nowrap",
        transition:"All .5s"
    }
}
class Carousel extends Component {
    constructor(props){
        super(props)
        this.coordinate={
            sx:null,
            sy:null,
            ex:null,
            ey:null
        };
    }
    componentDidMount() {
        this.props.setTimeout(()=>{
            this.props.next();
        },500);
    }
    onTouchStart(e){
        let ts=e.touches;
        if(ts.length>1){
            return;
        }
        let c=this.coordinate;
        c.sx=ts[0].pageX;
        c.sy=ts[0].pageY;
        console.log(c)
    }
    onTouchCancel(e){
        alert("Cancel")
    }
    onTouchMove(e){
        e.preventDefault();
        let ts=e.touches;
        if(ts.length>1){
            return;
        }
        let c=this.coordinate;
        c.ex=ts[0].pageX;
        c.ey=ts[0].pageY;
    }
    onTouchEnd(e){
        alert("end")
    }
    render() {
        let data=this.props.data;
        let Component=this.props.component;
        let current=this.props.current;
        let style={
            div:{
                width:"100%",
                overflow:"hidden"
            },
            ul:{
                whiteSpace:"nowrap",
                transition:"All .5s",
                transform:`translate(-${current*100}%,0)`
            }
        }
        return (
            <div style={style.div} onTouchStart={(e)=>this.onTouchStart(e)} onTouchCancel={(e)=>this.onTouchCancel(e)} onTouchMove={(e)=>this.onTouchMove(e)} onTouchEnd={(e)=>this.onTouchEnd(e)}>
                <ul style={style.ul}>
                    {data.map((value,key)=><Component key={key} value={value}/>)}
                </ul>
            </div>
        )
    }
}

Carousel.propTypes={
    component:PropTypes.func.isRequired,
    data:PropTypes.arrayOf(PropTypes.any).isRequired,
    current:PropTypes.number.isRequired,
    next:PropTypes.func.isRequired,
    pre:PropTypes.func.isRequired
}

// connect redux
function mapStateToProps(state) {
    return state;
}
function mapDispatchToProps(dispatch) {
    return {
        next: function() {
            let a=CHANGE_IMG_CREATOR(NEXT);
            dispatch(a);
        },
        pre:function(){
            let a=CHANGE_IMG_CREATOR(PRE);
            dispatch(a);
        }
    }
}
//actor
export const CHANGE_IMG="CHANGE_IMG";
export const NEXT="NEXT";
export const PRE="PRE";
export const CHANGE_IMG_CREATOR=(act)=>({type:CHANGE_IMG,action:act});
export default connect(mapStateToProps, mapDispatchToProps)(enhance(Carousel));
// export default enhance(Carousel)
