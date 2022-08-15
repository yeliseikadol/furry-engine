import * as React from 'react';
/*import Form from './components/Form';*/
import NavBar from './components/NavBar'
import TitleSection from './components/TitleSection'
import SectionAbout from './components/SectionAbout';
import SectionAdvantages from './components/SectionAdvantages';
import SectionProcess from './components/SectionProcess';
import SectionCurriculum from './components/SectionCurriculum';
import SectionResult from './components/SectionResult';
import SectionTeachers from './components/SectionTeachers';
import SectionEnroll from './components/SectionEnroll';
import SectionQA from './components/SectionQA';
import './App.css';
import './fonts.css';
import './styling.css'

function App() {
  return (
    <div className="flex-column">
      <NavBar/>
      <TitleSection/>
      <section className='flex-column flex-gap-128 bottom-2'>
        <SectionAbout/>
        <SectionAdvantages/>
        <SectionProcess/>
        <SectionCurriculum/>
        <SectionResult/>
        <SectionTeachers/>
        <SectionEnroll/>
        <SectionQA/>
      </section>
    </div>
  )
}

export default App;
