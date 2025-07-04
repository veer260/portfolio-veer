import React from 'react'

function Emphasised({children}) {
    return (
        <strong style={{color: 'var(--gray-1200)'}}>
            <span>
                {children}
            </span>
            
        </strong>
    )
}

export default Emphasised
