import React from 'react'

function InstrumentTag({name, imgSrc, imgAlt}) {
    return (
        <div className='InstrumentTag'>
            <div className='InstrumentTag--logo'>
                <img src={imgSrc} alt={imgAlt}/>
            </div>
            <div className='InstrumentTag--name'>
                {name}
            </div>
        </div>
    )
}

export default InstrumentTag
