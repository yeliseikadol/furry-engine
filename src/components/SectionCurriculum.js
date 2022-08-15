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
                        <h2 className='text-accent'>От простого к сложному</h2>
                    </section>
                    <p>Программа составлена с учётом ожиданий работодателей и для фриланса. Чтобы поддерживать её актуальность, мы отслеживаем изменения в индустрии дизайна. Обучение проходит в формате недельных спринтов. Стоит напомнить, что у нас интенсивный курс.</p>
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
                        <p>Проблемы, точки, HMW, пользователи и сценарии</p>
                        <div className='button'>Задание. Экран</div>
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
                        <p>Цвет, Шрифт, Auto-layout, компоненты и варианты</p>
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
                        <p>Время передохнуть и позаниматься своими делами</p>
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
                        <p>Продукт для компании, CJM, работа в команде, Agile</p>
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
                        <p>Вёрстка проекта в HTML, публикация в интернете</p>
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
                        <h3>Помощь и фидбек</h3>
                        <p>Доступ к материалам, чатам с фидбеком и мастерклассам</p>
                    </div>

                </section>

            </section>
        </section>
    )
}

export default SectionCurriculum
