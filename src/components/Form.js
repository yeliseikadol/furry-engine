import * as React from 'react'
import { useState } from 'react'

function Form() {

    const [group, setGroup] = useState('26 сентября — 9 декабря')


    return (
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div>
                <label>
                    <inputTitle>Имя, Фамилия</inputTitle>
                    <input type="text" name="name" />
                </label>
                <label>
                    <inputTitle>Email</inputTitle>
                    <input type="email" name="email" />
                </label>
                <label>
                    <inputTitle>Телефон (на экстренный случай)</inputTitle>
                    <input type="tel" name="tel" />
                </label>
                <label>
                    <inputTitle>Группа</inputTitle>
                    <select
                        name='group'
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        >
                        <option value='26 сентября — 9 декабря'>26 сентября — 9 декабря</option>
                        <option value='21 ноября — 10 февраля'>21 ноября — 10 февраля</option>
                        <option value='9 января — 31 марта'>9 января — 31 марта</option>
                    </select>
                </label>
            </div>
            
            <div>
                <button type="submit">Поступить</button>
            </div>
        </form>
    )
}

export default Form