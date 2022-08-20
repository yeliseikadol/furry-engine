import React from 'react'
import titleVideo from '../title-video.mp4'
import {ReactComponent as Figma} from '../assets/logoFigma.svg';
import {ReactComponent as Apple} from '../assets/appleLogo.svg';
import {ReactComponent as Code} from '../assets/code.svg';
import {ReactComponent as Agile} from '../assets/agile.svg';
import {ReactComponent as Miro} from '../assets/logoMiro.svg';
import {ReactComponent as Material} from '../assets/materialDesign.svg';
import {ReactComponent as Notion} from '../assets/logoNotion.svg';

function TitleSection() {
    return (
        <section className="titleSection">
            <video className="titleVideo" src={titleVideo} autoPlay loop muted />
            <section className="titleSection__content">
                <div className='grid titleSection__grid'>
                    <div className="titleSection__banner flex flex-column flex-gap-32">
                        <div className='flex flex-column flex-gap-24'>
                            <h4 className="titleSection__eyebrow">Интенсивный курс</h4>
                            <h2 className="titleSection__title">UX/UI-дизайнер с&nbsp;нуля до&nbsp;портфолио</h2>
                            <div className='titleSection__features flex flex-wrap flex-gap-8'>
                                <div>Онлайн</div>
                                <div><span className="dot"></span></div>
                                <div>10 недель</div>
                                <div><span className="dot"></span></div>
                                <div>Сертификат IBM</div>
                            </div>
                        </div>
                        <div className='titleSection__instruments flex flex-wrap flex-gap-8'>
                            <div className="instrumentTag flex flex-gap-4"><Figma /><span class="buttonSmall">Figma</span></div>
                            <div className="instrumentTag flex flex-gap-4"><Miro /><span class="buttonSmall">Miro</span></div>
                            <div className="instrumentTag flex flex-gap-4"><Notion /><span class="buttonSmall">Notion</span></div>
                            <div className="instrumentTag flex flex-gap-4"><Agile /><span class="buttonSmall">Agile</span></div>
                            <div className="instrumentTag flex flex-gap-4"><Apple /><span class="buttonSmall">HIG</span></div>                        
                            <div className="instrumentTag flex flex-gap-4"><Material /><span class="buttonSmall">Material 3</span></div>
                            <div className="instrumentTag flex flex-gap-4"><Code /><span class="buttonSmall">HTML/CSS</span></div>                                                    
                        </div>
                        <div className='titleSection__buttonBar flex flex-gap-32'>
                            <button>Записаться</button>
                            <div className='titleSection__buttonBarGroups flex flex-column'>
                                <caption className='titleSection__buttonBarGroups'>Идёт набор на&nbsp;сентябрь и&nbsp;ноябрь 2022</caption>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default TitleSection
