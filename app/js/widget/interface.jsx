import {Component} from 'react';
class Interface extends Component {
    constructor(props) {
        super(props);
        const {outHandle: handle} = props;
        if (handle instanceof Function) {
            this.setState = (function (_this) {
                const setState = _this.setState;
                return function (...args) {
                    const callback = args[args.length - 1];
                    if (callback instanceof Function) {
                        args[args.length - 1] = function () {
                            callback.apply(this, args);
                            handle.call(this, this);
                        }
                    } else {
                        Array.prototype.push.call(args, function () {
                            handle.call(this, this);
                        })
                    }

                    setState.apply(this, args);
                }
            }(this));
        }
    }
}
export default Interface;
