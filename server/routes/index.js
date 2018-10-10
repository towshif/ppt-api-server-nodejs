const user = require('./user')
const article = require('./article')
const dataslide = require('./dataslide')
const mother = require('./mother')
const project = require('./project')

module.exports = (router) => {
    user(router)
    article(router)
    dataslide(router)
    mother(router)
    project(router)
}
