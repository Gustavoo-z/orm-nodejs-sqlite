class Controller {
  constructor(entidadeService) {
    this.entidadeService = entidadeService;
  }
  async selecionaTodos(req, res) {
    try {
      const listaDeRegistros = await this.entidadeService.selecionaTodosRegistros();
      return res.status(200).json(listaDeRegistros);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;