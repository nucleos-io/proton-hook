'use strict'

module.exports = class Quark {

  constructor(proton) {
    this.proton = proton
  }

  initialize() {
    return Promise.reject()
  }

  validate() {
    return Promise.resolve()
  }

  configure() {
    return Promise.resolve()
  }


}
