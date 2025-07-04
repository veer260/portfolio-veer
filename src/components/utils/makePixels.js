import { pinks, reds } from "./colorArrays";
import Pixel from "./Pixel";
import {range, rangeForDecimal}from "./range";


function getDistancefromCenter(cx, cy, x,y) {
    const dx = cx > x ? cx - x : x -cx;
    const dy = cy > y ? cy - y : y -cy;
    return Math.sqrt(dx * dx + dy * dy);
}

function makePixels(width, height, gap, size, ctx, colorArray) {
    const pixels = [];

    for(let i = 6; i < width; i+=gap) {
        for(let j = 6; j < height; j+=gap) {
            pixels.push(new Pixel(
                colorArray[range(0,3)], 
                i,
                j,
                0,
                ctx, 
                rangeForDecimal(0.002, 0.04),rangeForDecimal(0.8, 1.3)  ,
                rangeForDecimal(2.5, 3.5), 
                rangeForDecimal(0.01,0.20),
            getDistancefromCenter(width/2, height/2, i,j)) );
        }
    }
    return pixels;
}

export default makePixels;