import React from 'react'
import './button.sass'

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

function Button({ 
    children, 
    type, 
    onClick, 
    buttonStyle, 
    buttonSize 
}) {

    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0];

    const checkButtonSize = sizes.includes(buttonSize) ? buttonSize : sizes[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button




/* 
    <Button onClick={() => {console.log("You Clicked on Me!")}}
        type="button"
        buttonStyle="btn--primary--outline"
        buttonSize="btn--small"
    >
        Buy Now
    </Button>
*/