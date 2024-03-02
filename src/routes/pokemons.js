const express = require('express')
const router = express.Router()
const {
  getList, 
  getDetail
} = require('../controllers/pokemons')

// Al dejarlo vacio, no se agrega ningun prefix adelante de nuestra ruta 'pokemons'


/**
 * @swagger
 * /v1/pokemons:
 *   get:
 *     summary: Obtiene información básica de todos los Pokémon.
 *     responses:
 *       200:
 *         description: Datos de todos los Pokémon.
 *       500:
 *         description: Error interno del servidor.
 */
// All Pokemons
router.get("", getList)

/**
 * @swagger
 * /v1/pokemons/{name}:
 *   get:
 *     summary: Obtiene información básica de un Pokémon por su nombre.
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         description: Nombre del Pokémon.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Datos del Pokémon solicitado.
 *       404:
 *         description: Pokémon no encontrado.
 */
// Detail of pokemon with name
router.get('/:name', getDetail)


module.exports = router;