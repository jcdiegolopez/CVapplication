import {useState} from 'react';

export default function StudyForm( {study,handleChange} ){
    const [editable, setEditable] = useState(false);
    
    const type = "study";
    return(
        <div className="GeneralhtmlForm">
            <form  className="general-form-style" onSubmit={(e)=> e.preventDefault()}>
            <h1 className="general-form-title">Study Information</h1>
            <hr/>
            <br/>
            <div>
                <label htmlFor="school">Escuela de estudio:</label>
                <input disabled={editable} type="text"  id="title" name="school" value={study.school} onChange={(e)=> handleChange(e,type)} required/>
            </div>
            

            <div>
                <label htmlFor="title">Titulo de estudio:</label>
                <input disabled={editable} type="text" id="title" name="title"  value={study.title} onChange={(e)=> handleChange(e,type)} required/>
            </div>
            

            <div>
                <label htmlFor="dateStudy">Fecha de cierre:</label>
                <input disabled={editable} type="date" id="dateStudy" name="dateStudy"  value={study.dateStudy} onChange={(e)=> handleChange(e,type)} required/>
            </div>
        

            <button onClick={()=> setEditable(!editable)}>{editable ?"Editar" : "Bloquear"}</button>
            </form>   
        </div>
    );
}