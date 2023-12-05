import {useState} from 'react';


export default function PracticeForm({ practice,handleChange }){
    const [editable, setEditable] = useState(false);
    
    const type = "practice";
    return(
        <div className="GeneralhtmlForm">
            <form className="general-form-style" onSubmit={(e)=> e.preventDefault()}>
            <h1 className="general-form-title">Practice Information</h1>
            <hr/>
            <br/>
            <div>
                <label htmlFor="company">Compañia:</label>
                <input disabled={editable} type="text" id="company" name="company" value={practice.company} onChange={(e)=> handleChange(e,type)} required/>
            </div>
            

            <div>
                <label htmlFor="position">Posición:</label>
                <input disabled={editable} type="text" id="position" name="position"  value={practice.position} onChange={(e)=> handleChange(e,type)} required/>
            </div>
            

            <div>
                <label htmlFor="responsability">Responsibilidades:</label>
                <input disabled={editable} type="text" id="responsability" name="responsability"  value={practice.responsability} onChange={(e)=> handleChange(e,type)} required/>
            </div>
            

            <div>
                <label htmlFor="started">Fecha de inicio:</label>
                <input disabled={editable} type="date" id="started" name="started"  value={practice.started} onChange={(e)=> handleChange(e,type)} required/>
            </div>

            <div>
                <label htmlFor="finished">Fecha de salida:</label>
                <input disabled={editable} type="date" id="finished" name="finished"  value={practice.finished} onChange={(e)=> handleChange(e,type)} required/>
            </div>
            


            <button  onClick={()=> setEditable(!editable)}>{editable ?"Editar" : "Bloquear"}</button>
            </form>   
        </div>   
    );
}