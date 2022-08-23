import React from 'react'
//import titleVideo from '../title-video.mp4'
import titleVideoWebM from '../assets/1066780867-hd.mov';
import {ReactComponent as Figma} from '../assets/logoFigma.svg';
import {ReactComponent as Apple} from '../assets/appleLogo.svg';
import {ReactComponent as Code} from '../assets/code.svg';
import {ReactComponent as Agile} from '../assets/agile.svg';
import {ReactComponent as Miro} from '../assets/logoMiro.svg';
import {ReactComponent as Material} from '../assets/materialDesign.svg';
import {ReactComponent as Notion} from '../assets/logoNotion.svg';
import { SmoothCorners } from 'react-smooth-corners';

function TitleSection() {

    const EmbedVideo = function(props) {
        return (
            <div className='flex' dangerouslySetInnerHTML={{ __html: `
             <video
               loop
               muted
               autoplay
               playsinline
               webkit-playsinline
               preload="metadata"
               src="${props.src}"
               class="${props.className}"
             />
           ` }}></div>
        )
     }

       
    const VideoContainer = function({children}) {
        return (
        <SmoothCorners
            corners="24, 24"
            borderRadius="48px"
            as="div"
        >
            {children}
        </SmoothCorners>
        )
    }


    return (
        <section className="titleSection">           
        <VideoContainer>
            <EmbedVideo className="titleVideo" src={titleVideoWebM} autoPlay playsInline muted loop></EmbedVideo>
        </VideoContainer>
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
                            <div className="instrumentTag flex flex-gap-4"><Figma /><span className="buttonSmall">Figma</span></div>
                            <div className="instrumentTag flex flex-gap-4"><Miro /><span className="buttonSmall">Miro</span></div>
                            <div className="instrumentTag flex flex-gap-4"><Notion /><span className="buttonSmall">Notion</span></div>
                            <div className="instrumentTag flex flex-gap-4"><Agile /><span className="buttonSmall">Agile</span></div>
                            <div className="instrumentTag flex flex-gap-4"><Apple /><span className="buttonSmall">HIG</span></div>                        
                            <div className="instrumentTag flex flex-gap-4"><Material /><span className="buttonSmall">Material 3</span></div>
                            <div className="instrumentTag flex flex-gap-4"><Code /><span className="buttonSmall">HTML/CSS</span></div>                                                    
                        </div>
                        <div className='titleSection__buttonBar flex flex-gap-32'>
                            <div className='titleSection__buttonBarGroups flex flex-column'>
                                <div className='titleSection__buttonBarGroups'>Идёт набор на&nbsp;сентябрь и&nbsp;ноябрь 2022</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default TitleSection
