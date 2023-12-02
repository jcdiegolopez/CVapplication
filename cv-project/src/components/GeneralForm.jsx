
export default function GeneralhtmlForm(){
    return(
        <div className="GeneralhtmlForm">
            <form action="/submit_htmlForm" method="post" className="general-form-style">
            <h1 className="general-form-title">General Information</h1>
            <hr/>
            <br/>
            <div>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required/>
            </div>
            

            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" required/>
            </div>
            

            <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input type="tel" id="telefono" name="telefono" pattern="[0-9]{10}" placeholder="Ej. 1234567890" required/>
            </div>
            

            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            


            <button type="submit">Enviar</button>
            </form>   
        </div>   
        
    );
}