import React from 'react'
import {ReactComponent as IconTime} from '../assets/iconEnrollPriceGrow.svg'

function SectionEnroll() {
    return (
        <section className='grid flex-column flex-gap-64 sectionEnroll'>
            <section className='flex-column flex-gap-32'>
                <h4 className='sectionEnroll-eyebrow'>Стоимость и группы</h4>
                <h1>Поступить <br/>в&nbsp;Bootcamp</h1>
            </section>
            <section className='flex-column flex-gap-16 sectionEnroll-selectBar'>
                <div className='flex flex-gap-16 sectionEnroll-dates'>
                    <div className='sectionEnroll-segmentedControl checked h4'>19 сен — 9 дек</div>
                    <div className='sectionEnroll-segmentedControl h4'>7 ноя — 26 янв</div>
                    <div className='sectionEnroll-segmentedControl h4'>26 дек — 17 мар</div>
                </div>
                <div className='flex flex-gap-16 sectionEnroll-dates'>
                    <div className='sectionEnroll-segmentedControl h4 checked'>В рассрочку</div>
                    <div className='sectionEnroll-segmentedControl h4'>Предоплата -20%</div>
                </div>
            </section>

            <section className='flex-column flex-gap-32 sectionEnroll-card'>
                <div className='flex-column flex-gap-24'>
                    <h4>19 сен — 9 дек</h4>
                    <h2>UX/UI-дизайнер с нуля до работы</h2>
                </div>
                <h4>Вечерняя форма: <br/>Практикумы с 18:00 до 20:00</h4>

                <div class='flex-column flex-gap-16'>
                <div className='flex-column'>
                    <caption className='stroked'>1690 BYN</caption>
                    <div className='h2 color-red'>1560 BYN</div>
                </div>

                <div className='flex'>
                    <p><span className='sectionEnroll-card-iconAlign'><IconTime/></span><span className='color-red'>Каждый поток дорожает.</span> Раньше запись — ниже цена.</p>
                </div>
                </div>

                <div className=''>
                    <button>Поступить</button>
                </div>
            </section>
        </section>
    )
}

export default SectionEnroll
