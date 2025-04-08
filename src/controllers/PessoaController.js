const database = require('../models');

class PessoaController {
  static async selecionaTodas(req, res) {
    try {
      const listaDePessoas = await database.Pessoa.findAll();
      return res.status(200).json(listaDePessoas);
    } catch (error) {
        
    }
  }
}

module.exports = PessoaController;