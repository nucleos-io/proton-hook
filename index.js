'use strict'

const Bindable = require('proton-bindable')

/**
 * @class Quark is an abstract class for creating quarks in proton
 * @classdesc A quark is a component of a proton application, every quark
 * has a life cycle consisting of 3 steps, validate -> configure -> initialize
 * @extends Bindable
 * @author Luis Hernandez
 */
class Quark extends Bindable {

  constructor(proton) {
    super(proton)
  }

  /**
   * @method initialize
   * @description initialize is the main method of every quark,therefore is
   * required, in this mehtod should do things as bind objects or middlewares
   * to proton
   * @return {Boolean} false
   * @author Luis Hernandez
   */
  initialize() {
    return Promise.reject()
  }

  /**
   * @method validate
   * @description sometimes is necesary validate things before initialize
   * a quark, for such things is this method, for example if the connection
   * of a database is necesary for the execution of this quark, in this
   * method the validation must be executed
   * @return {Boolean} true
   * @author Luis Hernandez
   */
  validate() {
    return Promise.resolve()
  }

  /**
   * @method configure
   * @description sometimes is necesary configure things before initialize
   * a quark, for such things is this method, for example create necessary
   * objects for initialize the quark
   * @return {Boolean} true
   * @author Luis Hernandez
   */
  configure() {
    return Promise.resolve()
  }

}

module.exports = Quark
