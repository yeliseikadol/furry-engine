import * as React from 'react'
import Form2 from './Form2'

function Form() {
    return (
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div>
                <label>
                    <inputTitle>Имя, Фамилия</inputTitle>
                    <input type="text" name="name" />
                </label>
            </div>
            <div>
                <label>
                    <inputTitle>Email</inputTitle>
                    <input type="email" name="email" />
                </label>
            </div>
            <Form2/>
            <div>
                <button type="submit">Press me</button>
            </div>
        </form>
    )
}

export default Form