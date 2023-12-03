export default function PracticeForm({ practice }){
    return(
        <div className="GeneralhtmlForm">
            <form  className="general-form-style" onSubmit={(e)=> e.preventDefault()}>
            <h1 className="general-form-title">Practice Information</h1>
            <hr/>
            <br/>
            <div>
                <label htmlFor="company">Compañia:</label>
                <input type="text" id="company" name="company" value={practice.company} required/>
            </div>
            

            <div>
                <label htmlFor="position">Posición:</label>
                <input type="text" id="position" name="position"  value={practice.position} required/>
            </div>
            

            <div>
                <label htmlFor="responsability">Responsibilidades:</label>
                <input type="text" id="responsability" name="responsability"  value={practice.responsability} required/>
            </div>
            

            <div>
                <label htmlFor="start">Fecha de inicio:</label>
                <input type="date" id="start" name="start"  value={practice.started} required/>
            </div>

            <div>
                <label htmlFor="finish">Fecha de salida:</label>
                <input type="date" id="finish" name="finish"  value={practice.finished} required/>
            </div>
            


            <button type="submit">Enviar</button>
            </form>   
        </div>   
    );
}