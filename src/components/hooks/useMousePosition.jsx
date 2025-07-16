import React from 'react'

function useMousePosition(elementRef) {
    const [pos, setPos] = React.useState({x:0,y:0});
    React.useEffect(() => {
        function handleMouseMove(e) {
            const newPos = {
                x: e.clientX,
                y: e.clientY,
            }
            setPos(newPos);

        }
        if(elementRef.current){
            const element = elementRef.current;
            element.addEventListener('mousemove', handleMouseMove );

            return () => {
                element.removeEventListener('mousemove', handleMouseMove);
            }
        }
    },[]);
    return pos;  
}

export default useMousePosition
