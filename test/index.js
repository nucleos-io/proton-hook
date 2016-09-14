const Proton = require('proton-koa')
const Quark = require('../')

const app = new Proton()

const quark = new Quark(app)
