import React from 'react'
import { ReactComponent as IconBooks} from '../assets/iconSectionProcessBooks.svg'
import { ReactComponent as IconLaptop} from '../assets/iconProcessNotebook.svg'
import { ReactComponent as IconHeadphones} from '../assets/iconProcessHeadphones.svg'

function SectionProcess() {
    return (
        <section className="grid flex-column flex-gap-128">
            
            <section className="flex-column flex-gap-64">

                <section className="left-1 right-7 flex-column flex-gap-32">
                    <h4>Как происходит обучение</h4>
                    <h1 className="text-accent">Практика на&nbsp;занятиях, теория — в&nbsp;удобное время</h1>
                    <p>В дистанционных курсах время с&nbsp;преподавателем уходит на&nbsp;практику, а&nbsp;теорию вы изучаете дома. Для этого у&nbsp;вас будут учебники Бюро Горбунова, а&nbsp;два раза в&nbsp;неделю вы будете работать с&nbsp;преподавателем на&nbsp;практических занятиях.</p>
                </section>

                <section className="sectionProcess-image1 flex-column flex-gap-16">
                    <div class='image--process--learn'></div>
                    <caption className='flex left-1 right-1'>Занятия устроены так, чтобы вы видели экран преподавателя и могли работать сами.</caption>
                    <div className='sectionProcess-image1-fact flex-column'>
                        <div className='h1'>2+1</div>
                        <div>2&nbsp;практических занятия в неделю + 1&nbsp;мастеркласс</div>
                    </div>
                </section>

            </section>

            <section className="flex-column flex-gap-64 left-1 right-1">

                <section className="right-6 flex-column flex-gap-32">
                    <h2 className="text-accent">Совместная работа</h2>
                    <p>Студенты выполняют задания в одном файле, поэтому вы всегда можете посмотреть на работу других. И даже прокомментировать.</p>
                </section>

                <section className="sectionProcess-image2 flex-column flex-gap-64">
                    <div class='image--process--cooperate'></div>
                    <caption className='flex'>Студенты выполняют задания одновременно в общем файле.</caption>
                </section>

            </section>

            <section className="flex left-1 right-1">
                <section className="sectionProcessBooksContainer flex-column right-6 radius-m flex-gap-24">
                    <IconBooks/>
                    <div className="flex-column flex-gap-16">
                        <h3>Теория по учебникам Бюро Горбунова, которыми вы можете пользоваться и после учёбы</h3>
                        <p>Каждый студент получает именную подписку на 1 год</p>
                    </div>
                    <div className="sectionProcessBooksContainer-fact">
                        <div className='image--books'></div>
                    </div>
                </section>
            </section>


            <section className='flex-column left-1 right-1 flex-gap-64'>

                <section className='flex-column right-6 flex-gap-24'>
                    <h2 className='text-accent'>Ценность bootcamp.by не в теории, а обратной связи. Мы даём фидбек два раза в неделю</h2>
                    <p>Работать и учиться тяжело, поэтому сделали занятия как можно короче. На практике и мастерклассах присутствуют несколько групп, поэтому у вас будет возможность пообщаться с другими дизайнерами потока.</p>
                </section>

                <section className='flex-column flex-gap-32'>

                    <section className="processCalendar">
                        <div className="processCalendar-day flex-column flex-gap-8">
                            <div className="processCalendar-dayLabel">Пн</div>
                            <div className="flex-column processCalendar-block processCalendar-2hour">
                                <h4>Практическое занятие</h4>
                                <caption>2 часа</caption>
                            </div>
                        </div>

                        <div className="processCalendar-day flex-column flex-gap-8">
                            <div className="processCalendar-dayLabel">Вт</div>
                            <div className="flex-column processCalendar-block processCalendar-1hour processCalendar-optional">
                                <h4>Групповая комната</h4>
                                <caption>1 час</caption>
                            </div>
                        </div>

                        <div className="processCalendar-day flex-column flex-gap-8">
                            <div className="processCalendar-dayLabel">Ср</div>
                            <div className="flex-column processCalendar-block processCalendar-2hour">
                                <h4>Практическое занятие</h4>
                                <caption>2 часа</caption>
                            </div>
                        </div>

                        <div className="processCalendar-day flex-column flex-gap-8">
                            <div className="processCalendar-dayLabel">Чт</div>
                            <div className="flex-column processCalendar-block processCalendar-1hour processCalendar-optional">
                                <h4>Ответы на вопросы</h4>
                                <caption>1 час</caption>
                            </div>
                            <div className="flex-column processCalendar-block processCalendar-1hour">
                                <h4>Мастеркласс</h4>
                                <caption>1 час</caption>
                            </div>
                        </div>

                        <div className="processCalendar-day flex-column flex-gap-8">
                            <div className="processCalendar-dayLabel">Пт</div>
                            <div className="flex-column processCalendar-block processCalendar-1hour processCalendar-deadline">
                                <h4>Срок сдачи домашней работы</h4>
                            </div>
                        </div>

                        <div className="flex processCalendar-weekdays">
                            <div className="processCalendar-day flex-column flex-gap-8">
                                <div className="processCalendar-dayLabel text-secondary">Сб</div>
                            </div>
                            <div className="processCalendar-day flex-column flex-gap-8">
                                <div className="processCalendar-dayLabel text-secondary">Вс</div>
                            </div>
                            <div className="flex-column processCalendar-block processCalendar-weekdayTask">
                                <h4>Наслаждайтесь отдыхом с семьей и друзьями</h4>
                            </div>
                        </div>
                    
                    </section>

                    <caption>Все занятия записываются, поэтому ничего страшного, если вы пропустите одно или несколько.</caption>
                </section>

            </section>


            <section className='flex-column left-1 right-7 flex-gap-24'>
                <section className='processRequirements-iconSection flex'><IconLaptop/><IconHeadphones/></section>
                <div class='flex-column flex-gap-16'>
                    <h3 className='text-accent'>Нужен только компьютер или ноутбук</h3>
                    <p>Для выпол­не­ния зада­ний нужен ком­пью­тер с нормальным интер­не­том. Все программы работают в браузере, поэтому вам не надо покупать макбук или айфон. Нач­ните работать на том обо­ру­до­ва­нии, кото­рое у вас уже есть.</p>
                </div>
            </section>

        </section>
    )
}

export default SectionProcess
