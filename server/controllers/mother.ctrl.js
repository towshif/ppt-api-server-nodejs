/** */
const Mother = require('../models/Mother')

module.exports = {
    addUser: (req, res, next) => {
        new Mother(req.body).save((err, newMother) => {
            if (err)
                res.send(err)
            else if (!newMother)
                res.send(400)
            else
                res.send(newMother)
            next()
        });
    },
    getUser: (req, res, next) => {
        Mother.findById(req.params.id).then
        /*populate('following').exec*/((err, mother)=> {
            if (err)
                res.send(err)
            else if (!mother)
                res.send(404)
            else
                res.send(mother)
            next()            
        })
    },

    /**
     * Get all slides
     */
    getAll: (req, res, next) => {
        Mother.find(req.params.id).limit(10).then((err, mother)=> {
            if (err)
                res.send(err)
            else if (!mother)
                res.send(404)
            else
                res.send(mother)
            next()            
        })
    }
}