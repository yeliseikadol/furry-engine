import React from 'react'
import {ReactComponent as Practise} from '../assets/iconSectionAdvantagesPractise.svg';
import {ReactComponent as Instruction1} from '../assets/iconSectionAdvantagesInstruction1.svg';
import {ReactComponent as Instruction2} from '../assets/iconSectionAdvantagesInstruction2.svg';
import {ReactComponent as Instruction3} from '../assets/iconSectionAdvantagesInstruction3.svg';
import {ReactComponent as Remote} from '../assets/iconSectionAdvantagesRemote.svg';
import {ReactComponent as Career} from '../assets/iconSectionAdvantagesCareer.svg';
import {ReactComponent as Portfolio} from '../assets/iconSectionAdvantagesPortfolio.svg';
import {ReactComponent as Code} from '../assets/iconSectionAdvantagesCode.svg';
import {ReactComponent as ReactIcon} from '../assets/iconSectionAdvantagesReact.svg';
import {ReactComponent as IbmLogo} from '../assets/ibmlogo.svg';

function SectionAdvantages() {
    return (
        <section className="grid">
            <section className="left-1 right-1 flex-column flex-gap-64">
                <section className="flex-column flex-gap-16 right-6">
                    <h2 className="text-accent">Особенности</h2>
                    <p>Bootcamp — это интенсивный практический курс, направленный на&nbsp;успешное выполнение частных заказов и&nbsp;получение работы.</p>
                </section>
                <section className="sectionAdvantages__cards flex flex-gap-32">
                    <section className="sectionAdvantages__cards-gridbox">
                        <div className="sectionAdvantages__card flex-column radius-m">
                            <div className='flex flex-v-center sectionAdvantages__iconSection'><Practise/></div>
                            <h3>Практика с&nbsp;1&nbsp;занятия, 2&nbsp;фидбека в&nbsp;неделю</h3>
                        </div>
                        <div className="sectionAdvantages__card flex-column radius-m">
                            <div className='flex flex-v-center sectionAdvantages__iconSection'><Instruction1/><Instruction2/><Instruction3/></div>
                            <h3>Инструкции для работы пока не хватает опыта</h3>
                        </div>
                        <div className="sectionAdvantages__card flex-column radius-m">
                            <div className='flex flex-v-center sectionAdvantages__iconSection'><Remote/></div>
                            <h3>Для удаленной работы и белорусского рынка</h3>
                        </div>
                        <div className="sectionAdvantages__card flex-column radius-m">
                            <div className='flex flex-v-center sectionAdvantages__iconSection'><Career/></div>
                            <h3>Поиск работы уже на 6 неделе после начала обучения</h3>
                        </div>
                        <div className="sectionAdvantages__card flex-column radius-m">
                            <div className='flex flex-v-center sectionAdvantages__iconSection'><Portfolio/></div>
                            <h3>2 проекта: мобильное и десктоп приложения</h3>
                        </div>
                        <div className="sectionAdvantages__card flex-column radius-m">
                            <div className='flex flex-v-center sectionAdvantages__iconSection'><Code/><ReactIcon/></div>
                            <h3>Живой проект на React в конце курса по желанию</h3>
                        </div>
                    </section>
                    <div className='flex-column flex-gap-32 ibmcertfact radius-m'>
                        <IbmLogo/>
                        <div className='text-inverted text-center'>Сертификат IBM в конце курса</div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default SectionAdvantages
