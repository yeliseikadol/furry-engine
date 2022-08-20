import React from 'react'
import Form from './Form'
import {ReactComponent as IconTime} from '../assets/iconEnrollPriceGrow.svg'

function SectionEnroll() {
    return (
        <section className='grid flex-column flex-gap-64 sectionEnroll' id='form-1'>
            <section className='flex-column flex-gap-32'>
                <h4 className='sectionEnroll-eyebrow'>Стоимость и группы</h4>
                <h1>Поступить <br/>в&nbsp;Bootcamp</h1>
            </section>

            <section className='flex-column flex-gap-32 sectionEnroll-card'>
                <div className='flex-column flex-gap-24'>
                    <h4>Интенсивный курс</h4>
                    <h2>UX/UI-дизайнер</h2>
                    <p>Ближайшие старты: 26 сен, 21 ноя</p>
                </div>
                <h4>Вечерняя форма: <br/>Практикумы с&nbsp;18:00 до&nbsp;20:00 по&nbsp;Минску</h4>

                <div class='flex-column flex-gap-16'>
                <div className='flex-column'>
                    <caption className='stroked'>1690&nbsp;BYN</caption>
                    <div className='h2 color-red'>1560&nbsp;BYN</div>
                </div>

                <div className='flex'>
                    <p><span className='sectionEnroll-card-iconAlign'><IconTime/></span><span className='color-red'>Каждый поток дорожает.</span> Раньше запись&nbsp;— ниже цена.</p>
                </div>
                </div>

                <div className=''>
                    <Form/>
                </div>
            </section>
        </section>
    )
}

export default SectionEnroll
