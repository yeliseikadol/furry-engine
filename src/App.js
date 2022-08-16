import * as React from 'react';
import Form from './components/Form';
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
import Button from './components/Button';
import SegmentedControls from './components/SegmentedControls';
import Form2 from './components/Form2';
import './App.css';
import './fonts.css';
import './styling.css'

function App() {
  return (
    <div className="flex-column">
      <div><Button onClick={() => {console.log("You Clicked on Me!")}}
      type="button"
      buttonStyle="btn--primary--outline"
      buttonSize="btn--small"
      >Buy Now</Button></div>
      <div>
        <SegmentedControls>
          <option value='first'>first</option>
          <option value='second'>second</option>
        </SegmentedControls>
      </div>
      <div>
        <Form2/>
      </div>
      <NavBar/>
      <TitleSection/>
      <section className='flex-column flex-gap-128 bottom-2'>
        <Form/>
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
