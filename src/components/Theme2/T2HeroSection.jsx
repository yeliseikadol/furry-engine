import React from 'react'

export default function T2HeroSection() {
  return (
    <section className='hero--section grid--fullwidth'>
      <div className='video--background'>
        <div className='grid--regular'>
          <div className='hero--banner'>
            <div className='content'>
              <h4>Интенсивный курс</h4>
              <h1>UX/UI-дизайнер с&nbsp;нуля</h1>
              <div className='inlineListView'>
                <div>Онлайн</div>
                <div className='dot'></div>
                <div>10 недель</div>
                <div className='dot'></div>
                <div>Сертификат IBM</div>
              </div>
            </div>
            <div className='buttonBar'>
              <button>Записаться</button>
              <div>Идёт набор на&nbsp;сентябрь и&nbsp;ноябрь 2022</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}