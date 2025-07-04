import React from 'react'

function Text({children, style}) {
    return (
        <p style={{...style}}>
            {children}
        </p>
    )
}

export default Text;
