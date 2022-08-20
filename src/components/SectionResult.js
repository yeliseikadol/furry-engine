import React from 'react'

function SectionResult() {
    return (
        <section className='grid'>
            <section className='flex-column left-1 right-1 flex-gap-64'>
                <section className='flex-column right-6 flex-gap-32'>
                    <h4>Результат</h4>
                    <h1 className='text-accent'>Уверенное владение Фигмой, навык выполнения задач и&nbsp;портфолио для&nbsp;работы</h1>
                    <p>Про­грамма курса наце­лена на&nbsp;то, чтобы вы&nbsp;начали работать самостоятельно. Поэтому все упраж­не­ния, зада­ния и&nbsp;темы наце­лены на&nbsp;технические скиллы, а&nbsp;не&nbsp;на&nbsp;тео­рию и&nbsp;общую дизайнерскую обра­зо­ван­ность. Смотрите, какие работы создают наши уче­ники в&nbsp;конце курса:</p>
                </section>

                <section className='sectionResults-gallery'>
                </section>

                <section className='sectionResultCertificates flex-column flex-gap-32'>
                    <section className='flex-column flex-gap-16'>
                        <h3 className='text-accent'>Сертификаты</h3>
                        <p>Все ученики получают сертификаты в&nbsp;конце обучения:</p>
                    </section>

                    <section className='certificates--grid flex flex-gap-32'>
                        <div className='image--certificate--bootcamp'></div>
                        <div className='image--certificate--ibm'></div>


                        <div>{/*className='flex-column sectionResults-certificate sectionResults-certificate-ibm radius-m'>
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
                            */}
                        </div>

                </section>
            </section>
        </section>
    </section>
    )
}

export default SectionResult