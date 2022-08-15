import * as React from 'react'

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
            <div>
                <button type="submit">Press me</button>
            </div>
        </form>
    )
}

export default Form