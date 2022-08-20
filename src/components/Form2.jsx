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
            <div className='segmented--сontrols select--group'>
                <input
                    type="radio"
                    name='selectGroup'
                    id='group1'
                    value='19 сен — 9 дек'
                    checked={isChecked('group1')}
                    onChange={onSelect}
                />
                <label htmlFor='group1'>26 сен — 16 дек</label>
                <input
                    type="radio"
                    name='selectGroup'
                    id='group2'
                    value='21 ноя — 10 фев'
                    checked={isChecked('group2')}
                    onChange={onSelect}
                />
                <label htmlFor='group2'>21 ноя — 10 фев</label>
                <input
                    type="radio"
                    name='selectGroup'
                    id='group3'
                    value='9 янв — 31 мар'
                    checked={isChecked('group3')}
                    onChange={onSelect}
                />
                <label htmlFor='group3'>9 янв — 31 мар</label>
            </div>
        </>
    )
}

export default Form2
