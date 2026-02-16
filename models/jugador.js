class Jugador {
    constructor(id,nombre,apellido,edad,partidosGanados,marcaPala,posicion) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.partidosGanados = partidosGanados;
        this.marcaPala = marcaPala;
        this.posicion = posicion;
    }
}

module.exports = Jugador;