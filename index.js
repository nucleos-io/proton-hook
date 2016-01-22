'use strict'

module.exports = class Hook {

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
