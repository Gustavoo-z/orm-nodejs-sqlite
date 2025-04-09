const { Router } = require('express');
const PessoasController = require('../controllers/PessoaController.js');
const pessoaController = new PessoasController();
const router = Router();

router.get('/pessoas', (req, res) => pessoaController.selecionaTodos(req, res));
// router.get('/pessoas/:id', (req, res) => pessoaController.pegaUmPorId(req, res));
// router.post('/pessoas', (req, res) => pessoaController.criaNovo(req, res));
router.put('/pessoas/:id', (req, res) => pessoaController.atualiza(req, res));
// router.delete('/pessoas/:id', (req, res) => pessoaController.exclui(req, res));

module.exports = router;