import React from 'react'
import './segmentedControls.css'

const styles = [
    "btn--primary--solid",
    "btn--primary--outline",
    "btn--primary--text",
    "btn--secondary--solid",
    "btn--secondary--outline",
    "btn--secondary--text",
    "btn--danger--solid",
    "btn--warning--solid",
    "btn--success--solid"    
]

const sizes = [
    "btn--medium",
    "btn--small"
]

function SegmentedControls({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize 
}) {

    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];

    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0]

    return (
        <select className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </select>
    )
}

export default SegmentedControls