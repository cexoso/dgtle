export function toString(o) {
    if (o instanceof Object) {
        return o.toString();
    }
    return String(o);
}

export function toJSON(o) {
    return JSON.stringify(o);
}
