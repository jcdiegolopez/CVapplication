import { useState } from 'react'
import './styles/style.css'
import Header from './components/Header';
import GeneralForm from './components/GeneralForm';
import PracticeForm from './components/PracticeForm';
import StudyForm from './components/StudyForm';
import initialData from './assets/initialData.js';

function App() {
  const [info, setInfo] = useState(initialData);
  console.log(info);


  return (
    <>
      <Header/>
      <div className='cv-application'>
        <div className='forms-style'>
          <GeneralForm  general={info.general} / >
          <StudyForm  study={info.study}/>
          <PracticeForm practice={info.practice} />
          <h1>box 1</h1>
        </div>
        <div className='cv-page'>
          <h1>box 2</h1>
        </div>
      </div>
    </>
  )
}

export default App
