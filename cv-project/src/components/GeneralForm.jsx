import {useState} from 'react';

export default function GeneralForm( { general, handleChange } ){
    const [editable, setEditable] = useState(false);
    
    const type = "general";
    return(
        <div className="GeneralhtmlForm">
            <form  className="general-form-style" onSubmit={(e)=> e.preventDefault()}>
            <h1 className="general-form-title">General Information</h1>
            <hr/>
            <br/>
            <div>
                <label htmlFor="firstname">Nombre:</label>
                <input disabled={editable} type="text" id="firstname" name="firstname" value={general.firstname} onChange={(e)=> handleChange(e,type)} required/>
            </div>
            

            <div>
                <label htmlFor="lastname">Apellido:</label>
                <input disabled={editable} type="text" id="lastname" name="lastname"  value={general.lastname} onChange={(e)=> handleChange(e,type)} required/>
            </div>
            

            <div>
                <label htmlFor="tel">Teléfono:</label>
                <input disabled={editable} type="tel" id="tel" name="tel"  value={general.tel} onChange={(e)=> handleChange(e,type)} required/>
            </div>
            

            <div>
                <label htmlFor="mail">Email:</label>
                <input disabled={editable} type="email" id="mail" name="mail"value={general.mail} onChange={(e)=> handleChange(e,type)} required/>
            </div>
            


            <button onClick={()=> setEditable(!editable)} >{editable ?"Editar" : "Bloquear"}</button>
            </form>   
        </div>   
        
    );
}