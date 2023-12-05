import { useState } from 'react'
import './styles/style.css'
import Header from './components/Header';
import GeneralForm from './components/GeneralForm';
import PracticeForm from './components/PracticeForm';
import StudyForm from './components/StudyForm';
import initialData from './assets/initialData.js';
import Cv from './components/Cv.jsx';

function App() {
  const [info, setInfo] = useState(initialData);
  console.log(info);

  function handleChange(e,type) {
    const {name, value} = e.target;
    setInfo({...info, [type]:{...info[type],[name]:value}});
  }


  return (
    <>
      <Header/>
      <div className='cv-application'>
        <div className='forms-style'>
          <GeneralForm  general={info.general} handleChange={handleChange} / >
          <StudyForm  study={info.study} handleChange={handleChange}/>
          <PracticeForm practice={info.practice} handleChange={handleChange}/>
        </div>
        <div className='cv-page'>
          <Cv data={info}/>
        </div>
      </div>
    </>
  )
}

export default App
