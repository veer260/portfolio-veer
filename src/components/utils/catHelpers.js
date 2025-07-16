// let isBlinkingGoingOn = false;



// export function drawEye(start, gap, ctx, shifts, isBlinking) {
//     console.log({isBlinkingGoingOn})
//     if(isBlinkingGoingOn){
//         return;
//     }
    
//     function blink(fnArr, timeGap) {
//         isBlinkingGoingOn = true;
//         fnArr.forEach((fn, index) => {
//             setTimeout(() => {
//                  fn(start, gap, ctx, shifts);
//                 if(index == fnArr.length-1){
//                 }
//                 isBlinkingGoingOn = false;

//             },(index+1)*timeGap*1000);
//          });
//     }
//     // onlyMiddle(start, gap, ctx, shifts);


//     if(isBlinking) {
//         blink([full, middleUpper, onlyMiddle,drawNothing,onlyMiddle, middleUpper, full], 0.04);
//     }else {
//     drawRow(start+shifts.x*gap, 10-shifts.y*gap, ctx, 4, gap, 2);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*1, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*2, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*3, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*4, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap, 10-shifts.y*gap+gap*5, ctx, 4, gap, 2);

//     }
//     function full(start, gap, ctx, shifts){

//             // ctx.clearRect(0,0,200, 200);
//             ctx.clearRect(start-gap*2, 10-shifts.y*gap-gap, gap*6, gap*7);
//             console.log({start, gap, shifts});
        
//     drawRow(start+shifts.x*gap, 10-shifts.y*gap, ctx, 4, gap, 2);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*1, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*2, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*3, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*4, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap, 10-shifts.y*gap+gap*5, ctx, 4, gap, 2);

// }

// function middleUpper(start, gap, ctx, shifts){
//             // ctx.clearRect(0,0,400, 400);
//             ctx.clearRect(start-gap*2, 10-shifts.y*gap-gap, gap*6, gap*7);

//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*1, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*2, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*3, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*4, ctx, 4, gap, 4);

// }

// function onlyMiddle(start, gap, ctx, shifts){
//             // ctx.clearRect(0,0,400, 400);
//             ctx.clearRect(start-gap*2, 10-shifts.y*gap-gap, gap*6, gap*7);

//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*2, ctx, 4, gap, 4);
//     drawRow(start+shifts.x*gap-gap, 10-shifts.y*gap+gap*3, ctx, 4, gap, 4);
// }

// function drawNothing(start, gap, ctx, shifts){
//             ctx.clearRect(start-gap*2, 10-shifts.y*gap-gap, gap*6, gap*7);



// }
  

    
   
// }



// export function drawRow(start, fromTop, ctx, increment, gap, iteration) {
//     for(let i = 0; i < iteration; i++) {
//     ctx.beginPath();
//     ctx.arc(start, fromTop, 1.2, 0, 2 * Math.PI);
//     ctx.fillStyle = "gray";
//     ctx.fill();
//     ctx.lineWidth = 1;
//     ctx.strokeStyle = "gray";
//     ctx.stroke();
//     start+= gap;
//     }
// }

// export function drawEyeBrow(start, gap,ctx, shiftX, shiftY) {
//     drawRow(start + shiftX*gap,  10-shiftY, ctx, 4, gap, 3);
//     drawRow(start - gap*1+shiftX*gap,  10-shiftY + gap*1, ctx, 0, gap, 1);
//     drawRow(start + gap*3+shiftX*gap,  10-shiftY + gap*1, ctx, 0, gap, 1);
//     drawRow(start - gap*1+shiftX*gap,  10-shiftY + gap*2, ctx, 0, gap, 1);
//     drawRow(start + gap*3+shiftX*gap,  10-shiftY + gap*2, ctx, 0, gap, 1);
// }



// Use a Map to track blinking state for each eye
const eyeBlinkingState = new Map();

export function drawEye(start,fromTop, gap, ctx, shifts, isBlinking, eyeId = 'default') {
    // console.log({eyeBlinkingState: eyeBlinkingState.get(eyeId)});
    
    // Check if THIS specific eye is blinking
    if(eyeBlinkingState.get(eyeId)){
        return;
    }
    
    function blink(fnArr, timeGap) {
        eyeBlinkingState.set(eyeId, true); // Set blinking state for this eye
        fnArr.forEach((fn, index) => {
            setTimeout(() => {
                fn(start, gap, ctx, shifts);
                if(index == fnArr.length-1){
                    eyeBlinkingState.set(eyeId, false); // Reset blinking state when done
                }
            },(index+1)*timeGap*1000);
         });
    }

    if(isBlinking) {
        blink([full, middleUpper, onlyMiddle, drawNothing, onlyMiddle, middleUpper, full], 0.04);
    } else {

        drawRow(start+shifts.x*gap, fromTop-shifts.y*gap, ctx, 4, gap, 2);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*1, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*2, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*3, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*4, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap, fromTop-shifts.y*gap+gap*5, ctx, 4, gap, 2);
    }
    
    function full(start, gap, ctx, shifts){
        // Clear only the eye area instead of entire canvas
        ctx.clearRect(start-gap*3, fromTop-shifts.y*gap-gap, gap*7, gap*7);
        
        drawRow(start+shifts.x*gap, fromTop-shifts.y*gap, ctx, 4, gap, 2);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*1, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*2, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*3, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*4, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap, fromTop-shifts.y*gap+gap*5, ctx, 4, gap, 2);
    }

    function middleUpper(start, gap, ctx, shifts){
        // Clear only the eye area
        ctx.clearRect(start-gap*3, fromTop-shifts.y*gap-gap, gap*7, gap*7);

        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*1, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*2, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*3, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*4, ctx, 4, gap, 4);
    }

    function onlyMiddle(start, gap, ctx, shifts){
        // Clear only the eye area
        ctx.clearRect(start-gap*3, fromTop-shifts.y*gap-gap, gap*7, gap*7);

        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*2, ctx, 4, gap, 4);
        drawRow(start+shifts.x*gap-gap, fromTop-shifts.y*gap+gap*3, ctx, 4, gap, 4);
    }

    function drawNothing(start, gap, ctx, shifts){
        // Clear only the eye area
        ctx.clearRect(start-gap*3, fromTop-shifts.y*gap-gap, gap*7, gap*7);
    }
}

export function drawRow(start, fromTop, ctx, increment, gap, iteration, color="white") {
    for(let i = 0; i < iteration; i++) {
        ctx.beginPath();
        ctx.arc(start, fromTop, 1.2, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.lineWidth = 1;
        ctx.strokeStyle = color;
        ctx.stroke();
        start+= gap;
    }
}

export function drawEyeBrow(start, gap, ctx, shiftX, shiftY) {
    drawRow(start + shiftX*gap-3,  15-shiftY, ctx, 4, gap, 3);
    drawRow(start - gap*1+shiftX*gap-3,  15-shiftY + gap*1, ctx, 0, gap, 1);
    drawRow(start + gap*3+shiftX*gap-3,  15-shiftY + gap*1, ctx, 0, gap, 1);
    drawRow(start - gap*1+shiftX*gap-3,  15-shiftY + gap*2, ctx, 0, gap, 1);
    drawRow(start + gap*3+shiftX*gap-3,  15-shiftY + gap*2, ctx, 0, gap, 1);
}

export function drawPetFace(start, fromTop, gap, ctx) {
    drawRow(start -3,  fromTop, ctx, 4, gap, 3);
    drawRow(start - gap*1-3,  fromTop + gap*1, ctx, 0, gap, 1);
    drawRow(start + gap*3-3,  fromTop +  gap*1, ctx, 0, gap, 1);
    drawRow(start + gap*0,  fromTop +  gap*5, ctx, 0, gap, 2, "pink");
    drawRow(start + gap*0,  fromTop +  gap*6, ctx, 0, gap,2, "pink");


}