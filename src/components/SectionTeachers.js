import React from 'react'

function SectionTeachers() {
    return (
        <section className='grid flex-column left-1 right-1 flex-gap-64'>

            <section className='flex-column right-6 flex-gap-32'>
                <h4>Преподаватели</h4>
                <h2 className='text-accent'>Опытные белорусские дизайнеры</h2>
                <p>Нам важно, чтобы преподаватели имели опыт работы в&nbsp;хороших компаниях и&nbsp;могли служить для вас примером. Вы&nbsp;получите знания только от&nbsp;тех, кто сам прошёл путь с&nbsp;нуля.</p>
            </section>

            <section className='flex-column flex-gap-64'>

                <section className='flex-column right-6 flex-gap-16'>
                    <h3>Елисей Кадол</h3>
                    <h4><a href='https://admiralmarkets.com' target='blank_'>Admiral Markets</a> <br/>Senior UX/UI Designer</h4>
                    <p>— Привет! Я работаю дизайнером с&nbsp;2014&nbsp;года. Начинал фрилансером, а&nbsp;с&nbsp;2018 стал работать в&nbsp;компаниях. Последние 3 года я работаю удалённо — сейчас работаю старшим дизайнером в эстонской компании Admiral Markets. Расскажу вам как идти по&nbsp;карьере, чтобы работа приносила удовольствие и&nbsp;достойный доход.</p>
                </section>

                <section className='flex-column flex-gap-16'>
                    <h4>Работы преподавателя</h4>
                    <section className='sectionTeachers-worksGrid'>
                        <div>a</div>
                        <div>b</div>
                        <div>c</div>
                    </section>
                    <section className='sectionTeachers-links flex flex-gap-8'>
                        <a href='https://behance.net/yeliseikadol' target='blank_'>Behance</a>
                        <a href='https://dribbble.com/yeliseikadol' target='blank_'>Dribbble</a>
                        <a href='https://instagram.com/yeliseikadol' target='blank_'>Instagram</a>
                        <a href='https://linkedin.com/in/yeliseikadol' target='blank_'>LinkedIn</a></section>
                </section>
                
                <div>{/*<section className='flex-column flex-gap-32 sectionTeachers-testimonials'>
                    <div className='flex sectionTeachers-testimonial'>
                        <div className='sectionTeachers-testimonial-text'>Елисей очень хороший преподаватель. Постоянно был на связи, давал быстрый фидбэк, делился своим огромным богажом знаний. Елисей действительно был заинтересован в каждом ученике, а такое встретишь очень редко) Часто подерживал в сложные моменты и помогал их решать. Очень довольна, что у меня был такой преподаватель.</div>
                        <div className='flex-column flex-gap-16'>
                            <img alt='выпускница Марина Глущук'/>
                            <div className='buttonSmall'>Марина Глущук</div>
                        </div>
                    </div>
                    <div className='flex sectionTeachers-testimonial'>
                        <div className='sectionTeachers-testimonial-text'>Хочу сказать, что учеба была непростой, но интересной. Мне еще многому надо научится. Преподаватель помог в трудную минуту и постоянно подбадривал. За это ему огромное спасибо. Думаю, что я еще буду к нему обращаться за советами. Лично для меня 4 месяцев было немного маловато, но это потому что у меня усвояемость не очень быстрая. А так все круто!</div>
                        <div className='flex-column flex-gap-16'>
                            <img alt='выпускница Марина Глущук'/>
                            <div className='buttonSmall'>Марина Глущук</div>
                        </div>
                    </div>
                </section>*/}</div>
            </section>

            <section className='flex-column flex-gap-64'>

                <section className='flex-column right-6 flex-gap-16'>
                    <h3>Оксана Воробьёва</h3>
                    <h4><a href='https://lumos.mobi' target='blank_'>Lumos Mobi</a>, Senior UX/UI Designer</h4>
                    <p>"Привет! Я дизайнер в Lumos Mobi. Кроме большого опыта работы, у меня большой опыт преподавания в самых разных школах Минска и свой курс про карьеру дизайнера. Я прошла путь от нуля до работы в лучших продуктовых компаниях Беларуси и мне есть чем с вами поделиться.”</p>
                </section>

                <section className='flex-column flex-gap-16'>
                    <h4>Работы преподавателя</h4>
                    <section className='sectionTeachers-worksGrid'>
                        <div>a</div>
                        <div>b</div>
                        <div>c</div>
                    </section>
                    <section className='sectionTeachers-links flex flex-gap-8'>
                        <a href='https://www.behance.net/oksana_vorobey' target='blank_'>Behance</a>
                        <a href='https://www.instagram.com/oksana_vorobey/' target='blank_'>Instagram</a>
                        <a href='https://www.linkedin.com/in/oksana-vorobyeva-81a379203/' target='blank_'>LinkedIn</a>
                    </section>
                </section>
                
                <div>{/*<section className='flex-column flex-gap-32 sectionTeachers-testimonials'>
                    <div className='flex sectionTeachers-testimonial'>
                        <div className='sectionTeachers-testimonial-text'>Елисей очень хороший преподаватель. Постоянно был на связи, давал быстрый фидбэк, делился своим огромным богажом знаний. Елисей действительно был заинтересован в каждом ученике, а такое встретишь очень редко) Часто подерживал в сложные моменты и помогал их решать. Очень довольна, что у меня был такой преподаватель.</div>
                        <div className='flex-column flex-gap-16'>
                            <img alt='выпускница Марина Глущук'/>
                            <div className='buttonSmall'>Марина Глущук</div>
                        </div>
                    </div>
                    <div className='flex sectionTeachers-testimonial'>
                        <div className='sectionTeachers-testimonial-text'>Хочу сказать, что учеба была непростой, но интересной. Мне еще многому надо научится. Преподаватель помог в трудную минуту и постоянно подбадривал. За это ему огромное спасибо. Думаю, что я еще буду к нему обращаться за советами. Лично для меня 4 месяцев было немного маловато, но это потому что у меня усвояемость не очень быстрая. А так все круто!</div>
                        <div className='flex-column flex-gap-16'>
                            <img alt='выпускница Марина Глущук'/>
                            <div className='buttonSmall'>Марина Глущук</div>
                        </div>
                    </div>
            </section>*/}</div>

            </section>

        </section>
    )
}

export default SectionTeachers