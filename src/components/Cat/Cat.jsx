import React from 'react';
import styles from './Cat.module.css';
import { drawEye, drawEyeBrow, drawPetFace } from '../utils/catHelpers';
import useMousePosition from '../hooks/useMousePosition';
import SpotifySong from '../../routes/spotify/SpotifySong';
import Text from '../Text/Text';

function Cat() {
    const [shifts, setShifts] = React.useState({
        x: 0,
        y: 0
    })
    const [currentPos, setCurrentPos] = React.useState({x: 0, y: 0});
    const [targetPos, setTargetPos] = React.useState({x: 100, y : 100});
    const canvasRef = React.useRef();
    const wrapperRef = React.useRef();
    const mousePos = useMousePosition(wrapperRef);
    const animationRef = React.useRef();
    const [isBlinking, setIsBlinking] = React.useState(false);
    const [isBeingPet, setIsBeingPet] = React.useState(false);
    const distanceToCover = Math.pow(currentPos.x - targetPos.x, 2) + Math.pow(currentPos.y - targetPos.y, 2);
    // const isMoving = distanceToCover !=  0 ? false : true;
    const [isMoving, setIsMoving] = React.useState(false);

    function lerp(start, end, t) {
        return (end*t + start*(1-t));
    }


    function handleClick(e) {
    const rect = wrapperRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setTargetPos({ x, y });
    }

    React.useEffect(() =>{
        setIsMoving(true);
        const animate = () => {
            console.log('running');
        setCurrentPos(prevCurrentPos => {
        const newX = lerp(prevCurrentPos.x, targetPos.x, 0.03);
        const newY = lerp(prevCurrentPos.y, targetPos.y, 0.03);
        
        const distance = Math.sqrt(
          Math.pow(targetPos.x - newX, 2) + 
          Math.pow(targetPos.y - newY, 2)
        );
        
        if (distance < 0.5) {
            setCurrentPos(targetPos);
            setIsMoving(false)
            cancelAnimationFrame(animationRef.current);    
        }
        
        return { x: newX, y: newY };
        });
        animationRef.current = requestAnimationFrame(animate);
        };
        animate();
        
        return () => {
        if (animationRef.current) {
            cancelAnimationFrame(animationRef.current);
        }
    };

    },[targetPos]);
    //setting is Blinkign to true after 3 seconds
    React.useEffect(() => {
        const handleTimeout = () => {
            setIsBlinking(true);
        }
        if(!isBlinking){
        const id = window.setTimeout(handleTimeout, 5*1000);
         return () => {
            clearTimeout(id);
        }
        }
       
    },[isBlinking]);

    // setting isBlinking to false after 3 seconds
    React.useEffect(() => {
         const handleTimeout = () => {
            setIsBlinking(false);

        }
        if(isBlinking) {
             const id = window.setTimeout(handleTimeout, 0.24*1000);
         return () => {
            clearTimeout(id);
        }
        }

    },[isBlinking]);

  

    React.useEffect(() => {
        if(canvasRef.current) {
            const startX = canvasRef.current.getBoundingClientRect().left;
            const startY = canvasRef.current.getBoundingClientRect().top;
            const width = canvasRef.current.getBoundingClientRect().width;
            const height = canvasRef.current.getBoundingClientRect().height;
            const centerX = startX+width/2;
            const centerY = startY+height/2;
            const y = mousePos.y - centerY;
            const x = mousePos.x - centerX;
            const rad = Math.atan2(y, x);   
            let deg = rad * 180 / Math.PI;
            if(deg < 0){
                deg = deg*-1;
            }else {
                deg = 360-deg;
            }
                 const newShifts = {
                // x: Math.floor(5*Math.cos(deg*Math.PI/180)),
                x: Math.round((5*Math.cos(deg*Math.PI/180))/5),
                y: Math.round((5*Math.sin(deg*Math.PI/180))/5),
                // y: Math.floor(5*Math.sin(deg*Math.PI/180))
            }
            setShifts(newShifts);
            }
    },[mousePos]);





    React.useEffect(() => {
        if(canvasRef.current) {
            const myCanvas = canvasRef.current;
            const ctx = myCanvas.getContext("2d");
            if(!isBlinking){
            ctx.clearRect(0,0,myCanvas.width, myCanvas.height);
            }
                if(isMoving) {
                ctx.clearRect(0,0,myCanvas.width, myCanvas.height);
                    drawEyeBrow(myCanvas.width/4-1, 5, ctx, shifts.x, shifts.y);
                    drawEyeBrow(myCanvas.width*3/4-4, 5, ctx, shifts.x, shifts.y);
                }else if(isBeingPet) {
                    drawPetFace(myCanvas.width/4+1, 17, 5, ctx);
                    drawPetFace(myCanvas.width*3/4-3, 17, 5, ctx);
                   
                }else{
                     drawEye(myCanvas.width/4,10, 4.8, ctx, shifts, isBlinking, 'leftEye');
                    drawEye(myCanvas.width*3/4-2,10, 4.8, ctx, shifts, isBlinking, 'rightEye');
                }
             
        }
    },[shifts, isBlinking, isMoving, isBeingPet]);
    return (
        <div ref={wrapperRef} className={styles.catWrapper} onClick={handleClick} >
                 <canvas onMouseLeave={() => setIsBeingPet(false)} onMouseDown={(e) => setIsBeingPet(true)} onClick={(e) => e.stopPropagation()} ref={canvasRef} style={{left : `${currentPos.x}px`, top : `${currentPos.y}px`}} className={styles.catCanvas}  height="75" width="75" id="myCanvas">
            </canvas>
            {
                isBeingPet &&  <div  style={{left : `${currentPos.x-50}px`, top : `${currentPos.y - 120}px`}} className={styles.musicWrapper}>
            <SpotifySong  />

            </div>
            }
        </div>
       
    )
}

export default Cat
