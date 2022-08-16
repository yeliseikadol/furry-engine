import React from 'react'
import { useState } from 'react'

function Form2() {

    const [checked, setChecked] = useState('group1');

    const isChecked = (value) => value === checked;

    const onSelect = ({ target: { value } }) => { 
        setChecked(value)
     }

    return (
        <>
            <div className='form'>
                <input
                    type="radio"
                    name='segmentedControls'
                    id='exampleGroup1'
                    value='group1'
                    checked={isChecked('group1')}
                    onChange={onSelect}
                />
                <label htmlFor='exampleGroup1'>Group1</label>
                <input
                    type="radio"
                    name='segmentedControls'
                    id='exampleGroup2'
                    value='group2'
                    checked={isChecked('group2')}
                    onChange={onSelect}
                />
                <label htmlFor='exampleGroup2'>Group2</label>
                <input
                    type="radio"
                    name='segmentedControls'
                    id='exampleGroup3'
                    value='group3'
                    checked={isChecked('group3')}
                    onChange={onSelect}
                />
                <label htmlFor='exampleGroup3'>Group3</label>
            </div>
        </>
    )
}

export default Form2
