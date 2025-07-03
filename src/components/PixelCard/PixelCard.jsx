
import React from 'react';
import styles from './PixelCard.module.css';
import makePixels from '../utils/makePixels';

function PixelCard({ colorArray, width = 360, height = 400, primaryColor, secondaryColor, viewBox, children }) {
    const [isHovered, setIsHovered] = React.useState(false);
    const canvasRef = React.useRef();
    const pixels = React.useRef([]);
    const animationRef = React.useRef(null);


    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

         if (isHovered) {
        // Reset all pixels for the concentric effect
        pixels.current.forEach(pixel => {
            pixel.size = 0;
            pixel.counter = 0;
            pixel.isIdle = true;
            pixel.isShimmer = false;
            pixel.isReverse = false;
        });
    }
        

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            pixels.current.forEach((pixel) => {
                if (isHovered) {
                    pixel.appear();
                } else {
                    pixel.disappear();
                }
            });
            
            animationRef.current = requestAnimationFrame(animate);
        };

        // Start animation
        animate();

        // Cleanup
        return () => {
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, [isHovered]); // Re-run when hover state changes

    

    // Initialize pixels only once
    React.useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        pixels.current = makePixels(canvas.width, canvas.height, 10, 0, ctx, colorArray);
    }, []); // ← Empty dependency array = runs only once

    return (
        <div 
            style={{'--svg-wrapper-border': `${isHovered ? primaryColor : secondaryColor}`}}
            className={styles.canvasWrapper}
            onMouseLeave={() => setIsHovered(false)} 
            onMouseEnter={() => setIsHovered(true)}
        >

            <canvas  
                width={width} 
                height={height} 
                ref={canvasRef} 
                className={styles.myCanvas}
            />
            <div className={styles.overlay}>
                <svg 
                    // style={{'--svg-color': `${!isHovered ? secondaryColor : primaryColor}` }}
                    viewBox={viewBox} >
                    {children}
                </svg>
              
            </div>
            <div className={styles.grayOverlay}>

            </div>
        </div>
    );
}

export default PixelCard;
