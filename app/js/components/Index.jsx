import React, {Component} from 'react';
import Carousel, {CHANGE_IMG, NEXT, PRE, CHANGE_IMG_CREATOR} from './Carousel.jsx';
import Head from './Head.jsx';
import {combineReducers} from 'redux';
import Img_Carousel from './Img_Carousel.jsx';
import {connect} from 'react-redux';
import {Map} from 'immutable';
import SlideMenu from './SlideMenu.jsx';
import "../../css/index.scss";
let data = [
    {
        img: "resources/sample.png",
        title: "title1"
    }, {
        img: "resources/sample.png",
        title: "title2"
    }, {
        img: "resources/sample.png",
        title: "title3"
    }
];
class Index extends Component {
    render() {
        let carousel = this.props.CarouselReduce;
        let current = carousel.get("current");
        let data = carousel.get("data");
        return (
            <div className="indexPage">
                <Head></Head>
                <Carousel component={Img_Carousel} data={data} current={current}></Carousel>
            </div>
        )
    }
}
//reduce
function _(state = {}, action) {
    switch (action.type) {
        default:
            return state;
    }
}
function CarouselReduce(state = new Map({current: 0, data: data}), action) {
    let current = state.get("current");
    let data = state.get("data");
    switch (action.type) {
        case CHANGE_IMG:
            return state.set("current", (current + data.length + action.action) % data.length);
        default:
            return state;
    }
}
export let IndexReduce = combineReducers({IndexReduce: _, CarouselReduce});

// connect redux
function mapStateToProps(state) {
    console.log(state)
    return state.IndexReduce;
}
function mapDispatchToProps(dispatch) {
    return {next: function() {}, pre: function() {}}
}
export default connect(mapStateToProps, mapDispatchToProps)(Index);
