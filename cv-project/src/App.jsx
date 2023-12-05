import { useState } from 'react'
import './styles/style.css'
import Header from './components/Header';
import GeneralForm from './components/GeneralForm';
import PracticeForm from './components/PracticeForm';
import StudyForm from './components/StudyForm';
import initialData from './assets/initialData.js';
import Cv from './components/Cv.jsx';
import html2pdf from 'html2pdf.js';


function App() {
  const [info, setInfo] = useState(initialData);
  console.log(info);

  function handleChange(e,type) {
    const {name, value} = e.target;
    setInfo({...info, [type]:{...info[type],[name]:value}});
  }

  const generatePDF = () => {
    console.log('Generating PDF');
    const element = document.getElementById('printable'); // Replace 'elementId' with the ID of the HTML element you want to convert to PDF
    const options = {
      filename: 'cv.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
    html2pdf(element,options);
  };


  return (
    <>
      <Header/>
      <div className='cv-application'>
        <div className='forms-style'>
          <GeneralForm  general={info.general} handleChange={handleChange} / >
          <StudyForm  study={info.study} handleChange={handleChange}/>
          <PracticeForm practice={info.practice} handleChange={handleChange}/>
        </div>
        <div className='anose'>
        <div className='cv-page' id="printable">
          <Cv data={info} onClick={generatePDF}/>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
