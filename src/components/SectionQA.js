import React from 'react'

function SectionQA() {
    return (
        <section className='grid flex-column left-1 right-7 flex-gap-64'>

            <section className='flex-column flex-gap-32'>
                <section className='flex-column flex-gap-24'>
                    <h4>Вопросы и ответы</h4>
                    <section className='flex-column flex-gap-16'>
                        <h2 className='text-accent'>Популярные вопросы</h2>
                        <p>Скорее всего, на этом этапе у вас есть несколько вопросов. Если вы не нашли ответ, то отправьте нам вопрос через форму или запишитесь на звонок.</p>
                    </section>
                </section>
                <div><button>Задать свой вопрос</button></div>
            </section>

            <section className='sectionQA-section flex-column'>

                <div className='sectionQA-qa'>
                    <h4>Мне нужен опыт UX?</h4>
                    <div className='sectionQA-answer'>
                        Курс рассчитан на новичков или тех, у кого нет технической базы. Если вы уже работаете несколько лет дизайнером, то вам может быть скучно на теоретической части. Но вам точно будет весело на практической :-)
                    </div>
                </div>

                <div className='sectionQA-qa'>
                    <h4>Почему bootcamp.by, а не другие?</h4>
                    <div className='sectionQA-answer'>
                        <ol>
                            <li>Мы делаем упор на практические технические навыки.</li>
                            <li>У нас нет теоретических лекций, потому что это бесполезная трата времени.</li>
                            <li>Мы учим по крутым книжкам от Бюро Горбунова.</li>
                            <li>У нас 2 фидбека в неделю.</li>
                            <li>Мы проводим мастерклассы раз в неделю.</li>
                            <li>Мы даём всем ученикам доступ к будущим мастерклассам.</li>
                            <li>Начинаем искать работу в середине курса.</li>
                            <li>У нас весело :-)</li>
                        </ol> 
                    </div>
                </div>

                <div className='sectionQA-qa'>
                    <h4>Как много дизайнеров учится в буткемп?</h4>
                    <div className='sectionQA-answer'>
                        В группах учится по 20 человек. Преподаватель не комфортно работать с большим количеством учеников, а с меньшим — мы не сможем держать такую низкую цену.
                    </div>
                </div>

                <div className='sectionQA-qa'>
                    <h4>Как я познакомлюсь с одногрупниками?</h4>
                    <div className='sectionQA-answer'>
                        Все участники состоят в одном чате, а ещё у вас будут командные задания.
                    </div>
                </div>

                <div className='sectionQA-qa'>
                    <h4>Что, если мне не понравится?</h4>
                    <div className='sectionQA-answer'>
                        Если вам не понравится на первой неделе обучения, то мы вернём вам деньги. А если вы передумаете в процессе обучения, не хватит времени или покажется слишком сложно, то мы вернём деньги за оставшиеся недели без всяких условий. Книжки останутся у вас.
                    </div>
                </div>

                <div className='sectionQA-qa'>
                    <h4>Я могу вернуть деньги?</h4>
                    <div className='sectionQA-answer'>
                        Да, вы получите деньги за оставшиеся недели без всяких условий. Например, вы проучились 1 неделю, значит мы вернём вам деньги за 9 недель минус стоимость книг.
                    </div>
                </div>

            </section>
        </section>
    )
}

export default SectionQA