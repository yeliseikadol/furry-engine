import React from 'react'

function SectionAbout() {
    return (
        <section className="grid">
            <section className="left-1 right-1 top-1 flex-column flex-gap-64">
                <section className="flex-column flex-gap-24 right-6">
                    <h4>Что это за курс</h4>
                    <h2 className="text-accent">10 недель, чтобы стать дизайнером: мастерски овладеть инструментами, собрать портфолио и найти заказ</h2>
                </section>
                <section className="imageColumns flex flex-gap-32">
                    <div className="imageColumns__image flex-column flex-gap-16">
                        <img className="border-radius-m" src="" alt="экран, выполненный студентом на первом занятии"></img>
                        <caption>Экран студента на первом занятии</caption>
                    </div>
                    <div className="imageColumns__image flex-column flex-gap-16">
                        <img src="" alt="экран приложения в конце курса"></img>
                        <caption>Приложение в конце курса. <a href="https://figma.com" target="blank">Открыть в Figma</a></caption>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default SectionAbout
