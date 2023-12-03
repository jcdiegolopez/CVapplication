
export default function GeneralForm( { general } ){

    return(
        <div className="GeneralhtmlForm">
            <form  className="general-form-style" onSubmit={(e)=> e.preventDefault()}>
            <h1 className="general-form-title">General Information</h1>
            <hr/>
            <br/>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={general.firstname} required/>
            </div>
            

            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido"  value={general.lastname} required/>
            </div>
            

            <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono"  value={general.tel} required/>
            </div>
            

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email"value={general.mail} required/>
            </div>
            


            <button type="submit">Enviar</button>
            </form>   
        </div>   
        
    );
}