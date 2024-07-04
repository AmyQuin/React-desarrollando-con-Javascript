import "./ListaOpciones.css"

    //Metodo map -> arreglo.map((equipo, index) => {
    //   return <option></option> 
    //})
    const equipos = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

const ListaOpciones = () => {
    return <div className="lista-opciones">
    <label>Equipos</label>
        <select>
            { equipos.map((equipos, index) => <option key={index}>{equipos}</option>) }
        </select>
    </div>
}
//DATO IMPORTANTE
//el .map solo accede a los arreglos

export default ListaOpciones