import "./Formulario.css"
import CampoTexto from "../CampoTexto"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"
//Cuando exportamos un archivo como Index lo importa por defecto


const Formulario = () => {

    const manejarEnvio = (e) => {
        e.preventDefault()
        console.log("Manejar el envio", e)
    }
    //e = evento
    //preventdefault

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <CampoTexto titulo="Nombre" placeholder="Ingresar nombre" required/> 
            <CampoTexto titulo="Puesto" placeholder="Ingresar puesto" required/> 
            <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto" required/> 
            <ListaOpciones/>
            <Boton>
                Crear
            </Boton>
        </form>
    </section>
}
//Le agregamos otro componente que es CampoTexto app/formulario/campotexto


export default Formulario