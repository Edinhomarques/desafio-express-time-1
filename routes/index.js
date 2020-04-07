const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController')
const UsuarioController = require('../controllers/UsuarioController')
const auth = require("../middleware/auth")
/* GET home page. */

router.get('/', homeController.index);
router.post('/contato', homeController.contato)
router.post('/sucesso', homeController.newsletter)
router.get('/listFiles', auth, homeController.listFiles)


router.get('/cadastro', UsuarioController.listUser )
router.post('/cadastro', UsuarioController.cadastroUsuario )

router.get('/login', UsuarioController.listLogin )
router.post('/login', auth, UsuarioController.usuarioAutenticado )

module.exports = router;
