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
                    <h4>Ближайшие старты: 26 сен, 21 ноя</h4>
                    <h4>Вечерняя форма: <br/>Практикумы с&nbsp;18:00 до&nbsp;20:00 по&nbsp;Минску</h4>
                </div>
                

                <div className='flex-column flex-gap-16'>
                <div className='flex-column'>
                    <div className='caption stroked'>640&nbsp;BYN</div>
                    <div className='h2 color-red'>520&nbsp;BYN в&nbsp;месяц</div>
                    <div className='caption'>3 платежа перед каждым месяцем обучения</div>
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
