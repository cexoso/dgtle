import React, {Component, PropTypes} from 'react';
let style={
    li:{
        width:"100%",
        display:"inline-block",
        position:"relative"
    },
    img:{
        width:"100%",
        height:"auto"
    },
    span:{
        right:"1.5rem",
        bottom:"1rem",
        position:"absolute",
        color:"#666"
    }
}
class Img_Carousel extends Component {
    render() {
        let value = this.props.value;
        return <li style={style.li}>
            <a>
                <img style={style.img} src={value.img}/>
                <span style={style.span}>{value.title}</span>
            </a>
        </li>

    }
}

export default Img_Carousel;
