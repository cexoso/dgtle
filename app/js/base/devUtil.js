export function toString(o) {
    if (o instanceof Object) {
        return o.toString();
    }
    return String(o);
}
