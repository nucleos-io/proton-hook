'use strict'

/**
 * @class Quark is an abstract class for creating quarks in proton
 * @classdesc A quark is a component of a proton application, every quark
 * has a life cycle consisting of 3 steps, validate -> configure -> initialize
 * @author Luis Hernandez
 */
class Quark {

  constructor(proton) {
    this.proton = proton
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

  /**
   * @method initialize
   * @description initialize is the main method of every quark,therefore is
   * required, in this mehtod should do things as bind objects or middlewares
   * to proton
   * @return {Boolean} false
   * @author Luis Hernandez
   */
  initialize() {
    throw new Error('This method must be implemented')
  }

  on() {
    return this.proton.on.apply(this, arguments)
  }

  emit() {
    const [eventName] = arguments
    this.proton.events[eventName] = true
    return this.proton.emit.apply(this.proton, arguments)
  }

  once() {
    return this.proton.once.apply(this.proton, arguments)
  }

  after() {
    return this.proton.after.apply(this.proton, arguments)
  }

}

module.exports = Quark
