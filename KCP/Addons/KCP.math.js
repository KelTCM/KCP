function sin(x) {
    return Math.sin(x);
}

function cos(x) {
    return Math.cos(x);
}

function map(Vlow, RlowMin, RlowMax, RhighMin, RhighMax) {
    let Vhigh = RhighMax - ((RlowMax - Vlow)*(RhighMax - RhighMin)/(RlowMax - RlowMin))
    return Vhigh
}