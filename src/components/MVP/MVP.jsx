import React from 'react'
import './MVP.sass'
import {ReactComponent as Figma} from './MVPassets/logoFigma.svg';
import {ReactComponent as Apple} from './MVPassets/appleLogo.svg';
import {ReactComponent as Code} from './MVPassets/code.svg';
import {ReactComponent as Agile} from './MVPassets/agile.svg';
import {ReactComponent as Miro} from './MVPassets/logoMiro.svg';
import {ReactComponent as Material} from './MVPassets/materialDesign.svg';
import {ReactComponent as Notion} from './MVPassets/logoNotion.svg';
import {ReactComponent as IBM} from './MVPassets/ibmlogo.svg';
import {ReactComponent as Practise} from './MVPassets/iconSectionAdvantagesPractise.svg';
import {ReactComponent as Instruction1} from './MVPassets/iconSectionAdvantagesInstruction1.svg';
import {ReactComponent as Instruction2} from './MVPassets/iconSectionAdvantagesInstruction2.svg';
import {ReactComponent as Instruction3} from './MVPassets/iconSectionAdvantagesInstruction3.svg';
import {ReactComponent as Remote} from './MVPassets/iconSectionAdvantagesRemote.svg';
import {ReactComponent as Career} from './MVPassets/iconSectionAdvantagesCareer.svg';
import {ReactComponent as Portfolio} from './MVPassets/iconSectionAdvantagesPortfolio.svg';
import {ReactComponent as ReactIcon} from './MVPassets/iconSectionAdvantagesReact.svg';
import {ReactComponent as IbmLogo} from './MVPassets/ibmlogo.svg';
import {ReactComponent as Headphones} from './MVPassets/iconProcessHeadphones.svg';
import {ReactComponent as Laptop} from './MVPassets/iconProcessNotebook.svg'
import {ReactComponent as Books} from './MVPassets/iconSectionProcessBooks.svg'
import imageProcessBooks from './MVPassets/imageProcessBooks.png'
import CertificateIbm from './MVPassets/certificate-ibm.png'
import CertificateBootcamp from './MVPassets/certificate-bootcamp.png'

export default function MVP() {
  return (
    <section>

      <header>
        <div className='logo'>bootcamp.by</div>
        <div className='logo--description'>Интенсивные курсы дизайна в Беларуси</div>
      </header>

      <section className='section lead'>
        <h3>Что это за курс</h3>
        <h1>10 недель, чтобы стать дизайнером: овладеть инструментами, подготовить портфолио и найти заказ</h1>
        <div className='intrumentTags'>
            <div><Figma/>Figma</div>
            <div><Miro/>Miro</div>
            <div><Notion/>Notion</div>
            <div><Agile/>Agile</div>
            <div><Code/>HTML/CSS/React</div>
            <div><Apple/>Apple Design</div>
            <div><Material/>Google Material Design</div>
        </div>
        <div className='before-after--grid'>
            <div>
                <div className='image--container'>
                    <img src="" alt="" />
                </div>
                <caption>Работа студента на первом занятии</caption>
            </div>
            <div>
                <div className='image--container'>
                    <img src="" alt="" />
                </div>
                <caption>Приложение после курса</caption>
            </div>
        </div>
      </section>

      <section className='section about'>
        <h1>Особенности</h1>
        <div className='about--grid'>
            <div className='about--masonry'>
                <div>
                    <Practise/>
                    <div>Практика с 1 занятия, 2 фидбека в неделю</div>
                </div>
                <div>
                    <div><Instruction1/><Instruction2/><Instruction3/></div>
                    <div>Инструкции для работы пока не хватает опыта</div>
                </div>
                <div>
                    <Remote/>
                    <div>Для удаленной работы и белорусского рынка</div>
                </div>
                <div>
                    <Career/>
                    <div>Поиск работы на 6 неделе после начала обучения</div>
                </div>
                <div>
                    <Portfolio/>
                    <div>2 проекта: мобильное и десктоп приложения</div>
                </div>
                <div>
                    <ReactIcon/>
                    <div>Живой проект на react в конце курса по желанию</div>
                </div>
            </div>
            <div className='about--certificate'>
                <IBM/>
                <div className='h5'>Сертификат IBM в конце курса</div>
            </div>
        </div>
        <p className='lead'>Bootcamp — это интенсивный практический курс, направленный на успешное выполнение частных заказов и получение работы.</p>
      </section>

        <section className='section process'>
            <section className='sub'>
                <h3>Как проходит обучение</h3>
                <h1>Практика с учителем, теория — дома</h1>
                <p>В дистанционных курсах время с преподавателем уходит на практику, а теорию вы изучаете дома. у вас будут учебники по дизайну от бюро горбунова, а два раза в неделю вы будете работать с преподавателем на практических занятиях</p>
                <div className='process--laptop-container'>
                    <div className='factoid'>
                        <div className='h1'>2+1</div>
                        <div>2 занятия + мастеркласс в неделю</div>
                    </div>
                    <img src="" alt="" />
                    <caption>Занятия устроены так, чтобы вы видели экран преподавателя и могли работать сами</caption>
                </div>
            </section>

            <section className='sub'>
                <h1>Совместная работа</h1>
                <p>Студенты выполняют задания в одном файле, поэтому вы всегда можете посмотреть на работу других и даже прокомментировать</p>
                <img src="" alt="" />
                <caption>Студенты выполняют задания одновременно в общем файле.</caption>
            </section>

            <section className='sub'>
                <div className='books'>
                    <img src={imageProcessBooks} alt="" />
                    <Books/>
                    <h3>Учите теорию по учебникам Бюро Горбунова, которыми вы можете пользоваться и после учёбы</h3>
                    <p>Каждый студент получает именную подписку на 1 год</p>
                </div>
            </section>

            <section className='sub'>
                <h1>Ценность bootcamp не в теории, а обратной связи: Мы даём фидбек 2 раза в неделю</h1>
                <p>Работать и учиться тяжело, поэтому постарались сделать занятия как можно короче. На практике и мастерклассах присутствуют несколько групп, поэтому у вас будет возможность пообщаться с другими дизайнерами потока.</p>
                <div className='schedule'>
                    <div className="day">
                        <div className="day--label">Пн</div>
                        <div className="day--slot slot--2h slot--live">
                            <div className="slot--label h4">Практическое занятие</div>
                            <div className="slot--duration caption">2 часа</div>
                        </div>
                    </div>
                    <div className="day">
                        <div className="day--label">Вт</div>
                        <div className="day--slot slot--1h slot--additional">
                            <div className="slot--label h4">Групповая комната</div>
                            <div className="slot--duration caption">1 час</div>
                        </div>
                    </div>
                    <div className="day">
                        <div className="day--label">Ср</div>
                        <div className="day--slot slot--2h slot--live">
                            <div className="slot--label h4">Практическое занятие</div>
                            <div className="slot--duration caption">2 часа</div>
                        </div>
                    </div>
                    <div className="day">
                        <div className="day--label">Чт</div>
                        <div className="day--slot slot--1h slot--additional">
                            <div className="slot--label h4">Ответы на вопросы</div>
                            <div className="slot--duration caption">1 час</div>
                        </div>
                        <div className="day--slot slot--1h slot--live">
                            <div className="slot--label h4">Мастеркласс</div>
                            <div className="slot--duration caption">1 час</div>
                        </div>
                    </div>
                    <div className="day">
                        <div className="day--label">Пт</div>
                        <div className="day--slot slot--2h slot--deadline">
                            <div className="slot--label h4">Срок сдачи домашней работы</div>
                        </div>
                    </div>
                    <div className="day">
                        <div className="day--label">Сб, Вс</div>
                        <div className="day--slot slot--2h slot--rest">
                            <div className="slot--label h4">Наслаждайтесь отдыхом с семьей и друзьями</div>
                        </div>
                    </div>
                </div>
                <caption>Все занятия записываются, поэтому не страшно, если вы пропустите одно или даже несколько</caption>
            </section>

            <section className="requirements sub">
                <div><Laptop/><Headphones/></div>
                <h2>Нужен только компьютер или ноутбук</h2>
                <p>Для выпол­не­ния зада­ний нужен ком­пью­тер с нормальным интер­не­том. Все программы работают в браузере, поэтому вам не надо покупать макбук или айфон. Нач­ните работать на том обо­ру­до­ва­нии, кото­рое у вас уже есть.</p>
            </section>

        </section>

        <section className='section curriculum'>
            <h3>Программа</h3>
            <h1>От простого к сложному</h1>
            <p>Программа составлена с учётом ожиданий работодателей и для фриланса. Чтобы поддерживать её актуальность, мы отслеживаем изменения в индустрии дизайна. Обучение проходит в формате недельных спринтов. Стоит напомнить, что у нас интенсивный курс.</p>
            <div className="curriculum--grid">
                <div className="week--slot">
                    <h5>1 неделя</h5>
                    <h3>Исследование</h3>
                    <p>Понимание задачи, методы исследования</p>
                    <h5>Задание. Виджет</h5>
                </div>
                <div className="week--slot">
                    <h5>2 неделя</h5>
                    <h3>Синтез</h3>
                    <p>Проблемы, точки, HMW, пользователи и сценарии</p>
                    <h5>Задание. Экран</h5>
                </div>
                <div className="week--slot">
                    <h5>3 неделя</h5>
                    <h3>Поиск идей</h3>
                    <p>Генерация идей, отбор, User Flow, прототип</p>
                    <h5>Задание. Серия экранов</h5>
                </div>
                <div className="week--slot">
                    <h5>4 неделя</h5>
                    <h3>Компоненты, стили</h3>
                    <p>Цвет, Шрифт, Auto-layout, компоненты и варианты</p>
                    <h5>Задание. Библиотека стилей</h5>
                </div>
                <div className="week--slot">
                    <h5>5 неделя</h5>
                    <h3>Тестирование</h3>
                    <p>Переходы, Smart–animation, методы тестирования</p>
                    <h5>Задание. Публикация проекта</h5>
                </div>
                <div className="week--slot color--success">
                    <h5>2 недели</h5>
                    <h3>Перерыв</h3>
                    <p>Время передохнуть и позаниматься своими делами</p>
                </div>
                <div className="week--slot">
                    <h5>6 неделя</h5>
                    <h3>Карьера</h3>
                    <p>Портфолио, собеседования, тестовые задания</p>
                    <h5>Задание. Портфолио и CV</h5>
                </div>
                <div className="week--slot">
                    <h5>7 неделя</h5>
                    <h3>Внутренний продукт</h3>
                    <p>Продукт для компании, работа в команде, Agile</p>
                    <h5>Задание. Серия экранов</h5>
                </div>
                <div className="week--slot">
                    <h5>8 неделя</h5>
                    <h3>Компоненты+</h3>
                    <p>Состояния системы, корнер-кейсы, адаптивный дизайн</p>
                    <h5>Задание. Библиотека стилей</h5>
                </div>
                <div className="week--slot color--error">
                    <h5>9 неделя</h5>
                    <h3>Запуск</h3>
                    <p>Вёрстка проекта в HTML, публикация в интернете</p>
                    <h5>Задание. Публикация проекта</h5>
                </div>
                <div className="week--slot">
                    <h5>10 неделя</h5>
                    <h3>Поиск работы</h3>
                    <p>Публикация проекта, обновление портфолио</p>
                    <h5>Задание. Портфолио 2.0</h5>
                </div>
                <div className="week--slot">
                    <h5>Навсегда</h5>
                    <h3>поддержка</h3>
                    <p>Доступ к материалам, чатам с фидбеком и мастерклассам</p>
                </div>
            </div>
        </section>

        <section className="section result">
            <section className="sub">
                <h3>Результат</h3>
                <h1>Продвинутое владение Фигмой и портфолио для работы</h1>
                <p>Про­грамма курса наце­лена на то, чтобы вы начали работать самостоятельно. Поэтому все упраж­не­ния, зада­ния и темы наце­лены именно на технические скиллы, а не на тео­рию и общую дизайнерскую обра­зо­ван­ность. Смотрите, какие работы создают наши уче­ники в конце курса:</p>
                <div className='result--grid'>
                    <div>
                        <img src="" alt="" />
                        <caption>Работа ученика</caption>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <caption>Работа ученика</caption>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <caption>Работа ученика</caption>
                    </div>
                    <div>
                        <img src="" alt="" />
                        <caption>Работа ученика</caption>
                    </div>
                </div>
            </section>

            <section className="sub certificates">
                <h1>Сертификаты</h1>
                <p>Все ученики получают сертификаты в конце обучения:</p>
                <div className='certificates--grid'>
                    <img src={CertificateBootcamp} alt=''/>
                    <img src={CertificateIbm} alt=''/>
                </div>
            </section>
        </section>

        <section className='section tutors'>
            <h3>Преподаватели</h3>
            <h1>Опытные белорусские дизайнеры</h1>
            <p>Нам важно, чтобы преподаватели чего-то достигли сами и могли служить для вас примером. Вы получите опыт только от тех, кто сам прошёл путь с нуля и понимает о чём говорит.</p>
            <section className="sub">
                <h2>Елисей Кадол</h2>
                <h4>Senior UX/UI Designer в Admiral Markets</h4>
                <p>— Привет! Я работаю дизайнером с 2014 года. Начинал как фрилансер, после рождения сына в 2018 году стал работать на компании. Последние 3 года работаю удалённо. Сейчас работаю старшим дизайнером в эстонской компании Admirals. Расскажу вам как идти по карьере, чтобы жить ту жизнь, которую хочется.</p>
                <div className='tutor--works'>
                    <h3>Работы преподавателя</h3>
                    <div className='works--grid'>
                        <div><a href=""></a></div>
                        <div><a href=""></a></div>
                        <div><a href=""></a></div>
                    </div>
                </div>
            </section>
            <section className="sub">
                <h2>Оксана Воробьёва</h2>
                <h4>Senior UX/UI Designer в Lumos Mobi</h4>
                <p>Привет! Я дизайнер в Lumos Mobi. Кроме большого опыта работы, у меня большой опыт преподавания в самых разных школах Минска и свой курс про карьеру дизайнера. Я прошла путь от нуля до работы в лучших продуктовых компаниях Беларуси и мне есть чем с вами поделиться.</p>
                <div className='tutor--works'>
                    <h3>Работы преподавателя</h3>
                    <div className='works--grid'>
                        <div><a href=""></a></div>
                        <div><a href=""></a></div>
                        <div><a href=""></a></div>
                    </div>
                </div>
            </section>
        </section>

        <section className='section enroll'>
            <h3>Стоимость и группы</h3>
            <h1>Поступить в Bootcamp</h1>
            <div className='segmentedControls'>
                <div className='h4'>19 сен — 9 дек</div>
                <div className='h4'>7 ноя — 26 янв</div>
                <div className='h4'>26 дек — 17 мар</div>
            </div>
            <div className='segmentedControls'>
                <div className='h4'>Предоплата</div>
                <div className='h4'>В рассрочку</div>
            </div>

            <div className='enroll-form'>
                <h4>19 сен — 9 дек</h4>
                <h1>UX/UI-дизайнер с нуля</h1>
                <p>Вечерняя форма: Практикумы с 18:00 до 20:00 по Минскому времени</p>
                <div className="price">
                    <div className="price--old caption text--striked">1690 руб.</div>
                    <div className='h1 color--error'>1560 BYN</div>
                    <div className='caption color--error'>Каждый новый поток дорожает на 5%. Раньше оплатите — меньше заплатите.</div>
                </div>
                <button>Записаться</button>
            </div>
        </section>

        <section className='section faq'>
            <h3>Вопросы и ответы</h3>
            <h1>Популярные вопросы</h1>
            <p>Скорее всего, на этом этапе у вас есть несколько вопросов. Если вы не нашли ответ, то отправьте нам вопрос через форму или запишитесь на звонок.</p>
            <div>
                <div>
                    <h3>Как много дизайнеров учится в буткемп?</h3>
                    <p></p>
                </div>
                <div>
                    <h3>Мне нужен опыт UX/UI?</h3>
                    <p></p>
                </div>
                <div>
                    <h3>Как я познакомплюсь с одногрупниками?</h3>
                    <p></p>
                </div>
                <div>
                    <h3>Почему bootcamp.by, а не другие?</h3>
                    <p></p>
                </div>
                <div>
                    <h3>Что, если мне не понравится?</h3>
                    <p></p>
                </div>
                <div>
                    <h3>Я могу вернуть деньги?</h3>
                    <p></p>
                </div>
            </div>
        </section>

        <section className='section footer'>
            <h3>bootcamp.by</h3>
            <div>
                <div>
                    <div><a href="mailto:school@bootcamp.by">school@bootcamp.by</a></div>
                    <div><a href="tel:+375291234567">+375 29 123-45-67</a></div>
                </div>
                <div>
                    <div>ИП Кадол Е. Н.</div>
                    <div><a href="/corporate">Реквизиты</a></div>
                </div>
                <div>
                    <div>Сухаревская улица, 62</div>
                    <div>Минск, Беларусь, 220059</div>
                </div>
            </div>
        </section>

    </section>
  )
}
