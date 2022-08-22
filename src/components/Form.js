import * as React from 'react'
import { useState } from 'react'

function Form() {

    const [group, setGroup] = useState('26 сентября — 9 декабря')


    return (
        <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div>
                <label>
                    <p className='input--title'>Имя, Фамилия</p>
                    <input type="text" name="name" required />
                </label>
                <label>
                    <p className='input--title'>Email</p>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <p className='input--title'>Телефон (на экстренный случай)</p>
                    <input type="tel" name="tel" required />
                </label>
                <label>
                    <p className='input--title'>Группа</p>
                    <select
                        name='group'
                        value={group}
                        onChange={(e) => setGroup(e.target.value)}
                        required
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