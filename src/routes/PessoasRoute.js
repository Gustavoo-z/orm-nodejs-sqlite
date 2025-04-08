const { Router } = require('express');
const PessoasController = require('../controllers/PessoaController.js');
const pessoaController = new PessoasController();
const router = Router();

router.get('/pessoas', (req, res) => pessoaController.selecionaTodos(req, res));

module.exports = router;