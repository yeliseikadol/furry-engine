import React from 'react'
import { useState } from 'react'

function FormPayment() {

    const [checked, setChecked] = useState('group1');

    const isChecked = (value) => value === checked;

    const onSelect = ({ target: { value } }) => { 
        setChecked(value)
     }

    return (
        <>
            <div className='segmentedControl'>
                <input
                    type="radio"
                    name='segmentedControls'
                    id='exampleGroup1'
                    value='19 сен — 9 дек'
                    checked={isChecked('group1')}
                    onChange={onSelect}
                />
                <label htmlFor='exampleGroup1'>26 сен — 16 дек</label>
                <input
                    type="radio"
                    name='segmentedControls'
                    id='exampleGroup2'
                    value='group2'
                    checked={isChecked('group2')}
                    onChange={onSelect}
                />
                <label htmlFor='exampleGroup2'>21 ноя — 10 фев</label>
            </div>
        </>
    )
}

export default FormPayment
