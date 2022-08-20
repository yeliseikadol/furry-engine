import React from 'react'

function SectionAbout() {
    return (
        <section className="grid">
            <section className="left-1 right-1 top-1 flex-column flex-gap-64">
                <section className="flex-column flex-gap-24 right-6">
                    <h4>Что это за курс</h4>
                    <h2 className="text-accent">10&nbsp;недель, чтобы стать дизайнером: мастерски овладеть инструментами, собрать портфолио и&nbsp;пойти искать заказы</h2>
                </section>
                <section className="imageColumns flex flex-gap-32">
                    <div className="imageColumns__image flex-column flex-gap-16">
                        <div className='image--before'></div>
                        <div className='caption'>Экран студента на&nbsp;первом занятии</div>
                    </div>
                    <div className="imageColumns__image flex-column flex-gap-16">
                        <div className='image--after'></div>
                        <div className='caption'>Приложение в&nbsp;конце курса</div><div>{/*<a href="https://figma.com" target="blank">Открыть в Figma</a>*/}</div>
                    </div>
                    
                </section>
            </section>
        </section>
    )
}

export default SectionAbout
