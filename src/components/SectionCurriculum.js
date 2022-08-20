import React from 'react'
import {ReactComponent as IconRest} from '../assets/iconCurriculumRest.svg'
import {ReactComponent as IconLaunch} from '../assets/iconCurriculumLaunch.svg'

function SectionCurriculum() {
    return (
        <section className='grid flex-column'>
            <section className='flex-column left-1 right-1 flex-gap-64'>
                <section className='flex-column right-6 flex-gap-16'>
                    <section className='flex-column flex-gap-24'>
                        <h4>Программа</h4>
                        <h2 className='text-accent'>Учитесь шаг за&nbsp;шагом от&nbsp;простого к&nbsp;сложному</h2>
                    </section>
                    <p>Программа составлена с&nbsp;учётом ожиданий работодателей и&nbsp;для&nbsp;фриланса. Чтобы поддерживать её актуальность, мы отслеживаем изменения в&nbsp;индустрии дизайна. Обучение проходит в&nbsp;формате недельных спринтов. Тут стоит напомнить, что у&nbsp;нас интенсивный курс.</p>
                </section>

                <section className='curriculumGrid'>

                    <div className='curriculumGrid-item'>
                        <div className='button'>
                            1 неделя
                        </div>
                        <h3>Исследование</h3>
                        <p>Понимание задачи, методы исследования</p>
                        <div className='button'>Задание. Виджет</div>
                    </div>

                    <div className='curriculumGrid-item'>
                        <div className='button'>
                            2 неделя
                        </div>
                        <h3>Синтез</h3>
                        <p>Проблемы, точки, HMW, пользователи и&nbsp;сценарии</p>
                        <div className='button'>Задание. Экран. Сертификация IBM</div>
                    </div>

                    <div className='curriculumGrid-item'>
                        <div className='button'>
                            3 неделя
                        </div>
                        <h3>Поиск идей</h3>
                        <p>Генерация идей, отбор, User Flow, прототип</p>
                        <div className='button'>Задание. Серия экранов</div>
                    </div>

                    <div className='curriculumGrid-item'>
                        <div className='button'>
                            4 неделя
                        </div>
                        <h3>Компоненты, стили</h3>
                        <p>Цвет, Шрифт, Auto-layout, компоненты и&nbsp;варианты</p>
                        <div className='button'>Задание. Библиотека стилей</div>
                    </div>

                    <div className='curriculumGrid-item'>
                        <div className='button'>
                            5 неделя
                        </div>
                        <h3>Тестирование</h3>
                        <p>Переходы, Smart–animation, методы тестирования</p>
                        <div className='button'>Задание. Публикация проекта</div>
                    </div>

                    <div className='curriculumGrid-item text-accent'>
                        <div className='button'>
                            2 недели
                        </div>
                        <h3><IconRest/>Перерыв</h3>
                        <p>Время передохнуть и&nbsp;позаниматься своими делами</p>
                    </div>

                    <div className='curriculumGrid-item'>
                        <div className='button'>
                            6 неделя
                        </div>
                        <h3>Карьера</h3>
                        <p>Портфолио, собеседования, тестовые задания.</p>
                        <div className='button'>Задание. Портфолио и CV</div>
                    </div>

                    <div className='curriculumGrid-item'>
                        <div className='button'>
                            7 неделя
                        </div>
                        <h3>Внутренний продукт</h3>
                        <p>Продукт для&nbsp;компании, CJM, работа в&nbsp;команде, Agile</p>
                        <div className='button'>Задание. Серия экранов</div>
                    </div>

                    <div className='curriculumGrid-item'>
                        <div className='button'>
                            8 неделя
                        </div>
                        <h3>Компоненты PRO</h3>
                        <p>Состояния системы, корнер-кейсы, адаптивный дизайн</p>
                        <div className='button'>Задание. Библиотека стилей</div>
                    </div>

                    <div className='curriculumGrid-item curriculumGrid-launchWeek'>
                        <div className='button'>
                            9 неделя
                        </div>
                        <h3><IconLaunch/>Запуск проекта</h3>
                        <p>Вёрстка проекта в&nbsp;HTML, публикация в&nbsp;интернете</p>
                        <div className='button'>Задание. Публикация проекта</div>
                    </div>

                    <div className='curriculumGrid-item'>
                        <div className='button'>
                            10 неделя
                        </div>
                        <h3>Поиск работы</h3>
                        <p>Публикация проекта, обновление портфолио</p>
                        <div className='button'>Задание. Портфолио 2.0</div>
                    </div>

                    <div className='curriculumGrid-item text-accent'>
                        <div className='button'>
                            Навсегда
                        </div>
                        <h3>Помощь и&nbsp;фидбек</h3>
                        <p>Доступ к&nbsp;материалам, чатам с&nbsp;фидбеком и&nbsp;мастерклассам следующих групп</p>
                    </div>

                </section>

            </section>
        </section>
    )
}

export default SectionCurriculum
