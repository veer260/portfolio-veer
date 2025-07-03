export function rangeForDecimal(min, max) {
    return  Math.random() * (max - min) + min;
}

export function range(min, max) {
    return Math.floor(Math.random()*(max-min)) + min;
}
