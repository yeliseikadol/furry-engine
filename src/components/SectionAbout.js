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
                        <div class='image--before'></div>
                        <caption>Экран студента на&nbsp;первом занятии</caption>
                    </div>
                    <div className="imageColumns__image flex-column flex-gap-16">
                        <div class='image--after'></div>
                        <caption>Приложение в&nbsp;конце курса<div>{/*<a href="https://figma.com" target="blank">Открыть в Figma</a>*/}</div></caption>
                    </div>
                    
                </section>
            </section>
        </section>
    )
}

export default SectionAbout
