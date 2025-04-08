const dataSource = require('../models');

class Services {
  constructor(nomeDoModel) {
    this.model = nomeDoModel;
  }
  async selecionaTodosRegistros() {
    return dataSource[this.model].findAll();
  }}

module.exports = Services;