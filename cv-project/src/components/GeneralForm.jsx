
export default function GeneralhtmlForm(){
    return(
        <div className="GeneralhtmlForm">
            <form action="/submit_htmlForm" method="post">

            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" required/>

    
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" name="apellido" required/>


            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" name="telefono" pattern="[0-9]{10}" placeholder="Ej. 1234567890" required/>

    
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required/>


            <button type="submit">Enviar</button>
            </form>   
        </div>   
        
    );
}