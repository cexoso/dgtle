import React from 'react';
import Check from "widget/Check";
import Cn from "./Check.scss";
export default class IosCheck extends Check {
    template(checked) {
        return (<div className={`${Cn.ios} ${checked ? Cn.checked : Cn.unchecked}`}>
            <div className={`${Cn.point}`}></div>
        </div>)
    }
}
