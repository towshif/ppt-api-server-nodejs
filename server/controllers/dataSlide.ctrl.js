/** */
const DataSlide = require('../models/DataSlide')

module.exports = {
    addUser: (req, res, next) => {
        new DataSlide(req.body).save((err, newDataSlide) => {
            if (err)
                res.send(err)
            else if (!newDataSlide)
                res.send(400)
            else
                res.send(newDataSlide)
            next()
        });
    },
    getUser: (req, res, next) => {
        DataSlide.findById(req.params.id).then
        /*populate('following').exec*/((err, dataSlide)=> {
            if (err)
                res.send(err)
            else if (!dataSlide)
                res.send(404)
            else
                res.send(dataSlide)
            next()            
        })
    },

    /**
     * Get all slides
     */
    getAll: (req, res, next) => {
        DataSlide.find(req.params.id).limit(10).then((err, dataSlide)=> {
            if (err)
                res.send(err)
            else if (!dataSlide)
                res.send(404)
            else
                res.send(dataSlide)
            next()            
        })
    }
}