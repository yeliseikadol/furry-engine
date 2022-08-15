import React from 'react'
import {ReactComponent as IbmLogo} from '../assets/ibmLogoBlue.svg'
import LinkedInLogo from '../assets/linkedinlogo.png'
import ImageExample from '../assets/imageResultExample.jpg'

function SectionResult() {
    return (
        <section className='grid'>
            <section className='flex-column left-1 right-1 flex-gap-64'>
                <section className='flex-column right-6 flex-gap-32'>
                    <h4>Результат</h4>
                    <h1 className='text-accent'>Продвинутое владение Фигмой и портфолио для работы</h1>
                    <p>Про­грамма курса наце­лена на то, чтобы вы начали работать самостоятельно. Поэтому все упраж­не­ния, зада­ния и темы наце­лены именно на технические скиллы, а не на тео­рию и общую дизайнерскую обра­зо­ван­ность. Смотрите, какие работы создают наши уче­ники в конце курса:</p>
                </section>

                <section className='sectionResults-gallery'>

                    <section className='flex-column flex-gap-16'>
                        <img src={ImageExample} alt='Приложение выпускника'/>
                        <caption>Приложение после курса. <a href="https://figma.com" target='blank_'>Открыть в Figma</a></caption>
                    </section>

                    <section className='flex-column flex-gap-16'>
                        <img src={ImageExample} alt='Приложение выпускника'/>
                        <caption>Приложение после курса. <a href="https://figma.com" target='blank_'>Открыть в Figma</a></caption>
                    </section>

                    <section className='flex-column flex-gap-16'>
                        <img src={ImageExample} alt='Приложение выпускника'/>
                        <caption>Приложение после курса. <a href="https://figma.com" target='blank_'>Открыть в Figma</a></caption>
                    </section>

                    <section className='flex-column flex-gap-16'>
                        <img src={ImageExample} alt='Приложение выпускника'/>
                        <caption>Приложение после курса. <a href="https://figma.com" target='blank_'>Открыть в Figma</a></caption>
                    </section>

                    <section className='flex-column flex-gap-16'>
                        <img src={ImageExample} alt='Приложение выпускника'/>
                        <caption>Приложение после курса. <a href="https://figma.com" target='blank_'>Открыть в Figma</a></caption>
                    </section>

                    <section className='flex-column flex-gap-16'>
                        <img src={ImageExample} alt='Приложение выпускника'/>
                        <caption>Приложение после курса. <a href="https://figma.com" target='blank_'>Открыть в Figma</a></caption>
                    </section>

                </section>

                <section className='sectionResultCertificates flex-column flex-gap-32'>
                    <section className='flex-column flex-gap-16'>
                        <h3 className='text-accent'>Сертификаты</h3>
                        <p>Все ученики получают сертификаты в конце обучения:</p>
                    </section>

                    <section className='flex flex-gap-32'>

                        <div className='flex-column sectionResults-certificate sectionResults-certificate-ibm radius-m'>
                            <div className='flex-column sectionResults-certificate-title flex-gap-4'>
                                <div className='sectionResults-certificate-ibmTitle'>Enterprise Design Thinking Practitioner</div>
                                <div className='sectionResults-certificate-description'>Yelisei Kadol</div>
                                <div className='sectionResults-certificate-description'>2022</div>
                            </div>
                            <div className='flex sectionResults-certificate-bottomSection'>
                                <IbmLogo/>
                                <img className='sectionResults-certificate-linkedInLogo' src={LinkedInLogo} alt='Логотип LinkedIn. Сертификат можно прикрепить в LinkedIn'/>
                            </div>
                        </div>

                        <div className='flex-column sectionResults-certificate sectionResults-certificate-bootcamp radius-m'>
                            <div className='flex-column sectionResults-certificate-title flex-gap-4'>
                                <div className='h3'>UX/UI <br/>Designer</div>
                                <div className='sectionResults-certificate-description'>Yelisei Kadol</div>
                                <div className='sectionResults-certificate-description'>2022</div>
                            </div>
                            <div className='flex sectionResults-certificate-bottomSection'>
                                <div className='h4'>bootcamp.by</div>
                            </div>

                        </div>

                </section>
            </section>
        </section>
    </section>
    )
}

export default SectionResult