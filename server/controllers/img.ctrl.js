/** */
const Img = require('../models/Img')

module.exports = {

    getImg: (req, res, next) => {
        Img.findById(req.params.id).then
        /*populate('following').exec*/((err, img)=> {
            if (err)
                res.send(err)
            else if (!img)
                res.send(404)
            else
                res.send(img)
            next()            
        })
    },

    /**
     * Get all slides
     */
    getAll: (req, res, next) => {
        Img.find(req.params.id).limit(10).then((err, img)=> {
            if (err)
                res.send(err)
            else if (!img)
                res.send(404)
            else
                res.send(img)
            next()            
        })
    }
}