import React, {Component,PropTypes} from 'react';
import enhance from "../hoc/Timeout.jsx";
import Hammer from 'react-hammerjs';
import {connect} from "react-redux";

class Carousel extends Component {
    constructor(props){
        super(props);        
    }
    componentDidMount() {
        this.props.setTimeout(()=>{
            this.swipe("NEXT",4000);
        },4000);
    }
    onTap(e){
    }
    swipe(str,t){
        let NEXT=()=>{
            this.props.next();
        };
        let PRE=()=>{
            this.props.pre();
        }
        let doN={
            NEXT,
            PRE
        }
        doN[str]();
        this.props.setTimeout(()=>{
            this.swipe("NEXT",4000);
        },t||4000);
    }
    onSwipe(e){
        let current=this.props.current;
        let length=this.props.data.length;
        if(e.direction==2){//left
            if(current!=length-1){
                this.swipe("NEXT");
            }
        }else if(e.direction==4){//right
            if(current!=0){
                this.swipe("PRE");
            }
        }
    }
    render() {
        let data=this.props.data;
        let Component=this.props.component;
        let current=this.props.current;
        let style={
            div:{
                width:"100%",
                overflow:"hidden",
                fontSize:0
            },
            ul:{
                whiteSpace:"nowrap",
                transition:"All .5s",
                transform:`translate(-${current*100}%,0)`
            }
        }
        return (
            <Hammer onTap={this.onTap.bind(this)} onSwipe={this.onSwipe.bind(this)}>
                <div className={`Carousel_container`} style={style.div}>
                    <ul style={style.ul}>
                        {data.map((value,key)=><Component key={key} value={value}/>)}
                    </ul>
                    <div className={`Carousel_foot`}>
                        <ul>
                            {data.map((value,key)=><li key={key} className={key==current?'active':''}/>)}
                        </ul>
                        <div className="title">
                            {data[current].title}
                        </div>
                    </div>
                </div>
            </Hammer>
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
export const CHANGE_IMG_CREATOR=(act)=>{
    if(act==NEXT){
        return {type:CHANGE_IMG,action:1};
    }else if(act==PRE){
        return {type:CHANGE_IMG,action:-1};
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(enhance(Carousel));
// export default enhance(Carousel)
