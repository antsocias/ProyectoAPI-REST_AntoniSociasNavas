var express = require('express');
var router = express.Router();

const jugadoresController= require('../controllers/jugadores-controllers');

router.get('/jugadores', jugadoresController.listarJugadoresMarca);
router.get('/jugadores/:id', jugadoresController.listarJugadorId);

module.exports = router;