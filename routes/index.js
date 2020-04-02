const express = require('express');
const router = express.Router();
const homeController = require('../controllers/HomeController')
const UsuarioController = require('../controllers/UsuarioController')

/* GET home page. */

router.get('/', homeController.index);
router.post('/contato', homeController.contato)
router.post('/sucesso', homeController.newsletter)
router.get('/listFiles', homeController.listFiles)


router.get('/cadastro', UsuarioController.listUser )
router.post('/cadastro', UsuarioController.cadastroUsuario )

router.get('/login', UsuarioController.listLogin )
router.post('/login', UsuarioController.login )

module.exports = router;
