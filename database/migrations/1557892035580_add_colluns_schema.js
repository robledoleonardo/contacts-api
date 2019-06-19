'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class AddCollunsSchema extends Schema {
  up () {
    this.table('contatos', (table) => {
      table.string("cep");
      table.string("endereco");
      table.string("numero");
      table.string("bairro");
      table.string("cidade");
    })
  }

  down () {
    this.table('contatos', (table) => {
      table.dropColumn("cep");
      table.dropColumn("endereco");
      table.dropColumn("numero");
      table.dropColumn("bairro");
      table.dropColumn("cidade");
    })
  }
}

module.exports = AddCollunsSchema
