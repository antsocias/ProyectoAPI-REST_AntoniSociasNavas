const Jugador = require('../models/jugador');
const jugadoresJson = require('../data/jugadores.json');

//Listar todos los jugadores con opción de filtra por marca de pala
exports.listarJugadoresMarca = async (req, res) => {

    let jugadores = []
    let filtroMarca = req.query.marcaPala;

    for (let i = 0; i < jugadoresJson.length; i++) {
        let jugador = new Jugador(
            jugadoresJson[i].id,
            jugadoresJson[i].nombre,
            jugadoresJson[i].apellido,
            jugadoresJson[i].edad,
            jugadoresJson[i].partidosGanados,
            jugadoresJson[i].marcaPala,
            jugadoresJson[i].posicion
        );

        if(filtroMarca !== undefined) {
            if(jugador.marcaPala === filtroMarca) {
                jugadores.push(jugador)
            }
        } else {
            jugadores.push(jugador)
        }
    }
    return res.json(jugadores)
}

//Listar jugadores por ID
exports.listarJugadorId = async (req, res) => {

    const jugadorId = req.params.id;
    for (let i = 0; i < jugadoresJson.length; i++) {

        jugador = new Jugador (
            jugadoresJson[i].id,
            jugadoresJson[i].nombre,
            jugadoresJson[i].apellido,
            jugadoresJson[i].edad,
            jugadoresJson[i].partidosGanados,
            jugadoresJson[i].marcaPala,
            jugadoresJson[i].posicion
        );

        if (jugador.id == jugadorId) {
            return res.json(jugador)
        }
    }

}