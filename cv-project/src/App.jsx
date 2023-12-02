import { useState } from 'react'
import './styles/style.css'
import Header from './components/Header';
import GeneralForm from './components/GeneralForm';
import PracticeForm from './components/PracticeForm';
import StudyForm from './components/StudyForm';

function App() {
  return (
    <>
      <Header/>
      <div className='cv-application'>
        <div className='forms-style'>
          <GeneralForm/>
          <StudyForm/>
          <PracticeForm/>
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
