export default function StudyForm( {study} ){
    return(
        <div className="GeneralhtmlForm">
            <form  className="general-form-style" onSubmit={(e)=> e.preventDefault()}>
            <h1 className="general-form-title">Practice Information</h1>
            <hr/>
            <br/>
            <div>
                <label htmlFor="school">Escuela de estudio:</label>
                <input type="text"  id="title" name="school" value={study.school} required/>
            </div>
            

            <div>
                <label htmlFor="title">Titulo de estudio:</label>
                <input type="text" id="title" name="title"  value={study.title} required/>
            </div>
            

            <div>
                <label htmlFor="fecha">Fecha de cierre:</label>
                <input type="date" id="fecha" name="fecha"  value={study.dateStudy} required/>
            </div>
        

            <button type="submit">Enviar</button>
            </form>   
        </div>
    );
}