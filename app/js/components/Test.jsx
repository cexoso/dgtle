import React, {Component} from 'react';
function quickSort(arr) {    
    if (!(arr instanceof Array)) {
        throw new Error(`expectd Array but found ${arr.constructor.name}`);
    }
    const stack = [];
    function doOne(array, start, end) {
        if (end - start < 1) {
            return;
        }
        let isLeft = false;
        let base = start;
        let left = start;
        let right = end;
        let tmp = null;
        let index;
        // console.group("info")
        // console.log(array)
        while (right > left) {
            index = isLeft
                ? left
                : right;
            if ((array[index] < array[base]) ^ (index < base)) {
                tmp = array[index];
                array[index] = array[base];
                array[base] = tmp;
                base = index;
                isLeft = !isLeft;
            }
            isLeft ? left ++ : right--;
        }
        // console.log(array)
        // console.log(base)
        // console.groupEnd("info")
        stack.push({
            array,
            start,
            end: base - 1
        });
        stack.push({
            array,
            start: base + 1,
            end
        });
    }
    stack.push({
        array: arr,
        start: 0,
        end: arr.length - 1
    });
    let env = null;
    while (stack.length !== 0) {
        env = stack.pop();
        doOne(env.array, env.start, env.end);
    }
    return arr;
}

class Test extends Component {
    constructor(props) {
        super(props);
        const arr = [];
        for (let i = 0; i < 100; i++) {
            arr.push(Math.floor((Math.random() - 0.5) * 100));
        }
        const darr = Object.assign({},arr);
        const timestart = Date.now();
        quickSort(darr);
        const during = Date.now() - timestart;
        this.state = {
            view: {
                arr,
                darr,
                during
            }
        }
    }
    render() {
        const {arr,darr,during} = this.state.view;
        return (
            <div>
                <div>
                    ======================
                </div>
                <div>
                    arr:{arr.toString()}
                </div>
                <div>
                    darr:{darr.toString()}
                </div>
                <div>
                    during:{during.toString()}ms.
                </div>
                <div>
                    ======================
                </div>
            </div>
        )
    }
}
export default Test;
