/** */
const Project = require('../models/Project')

module.exports = {
    addUser: (req, res, next) => {
        new Project(req.body).save((err, newDataSlide) => {
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
        Project.findById(req.params.id).then
        /*populate('following').exec*/((err, project)=> {
            if (err)
                res.send(err)
            else if (!project)
                res.send(404)
            else
                res.send(project)
            next()            
        })
    },

    /**
     * Get all slides
     */
    getAll: (req, res, next) => {
        Project.find(req.params.id).limit(10).then((err, project)=> {
            if (err)
                res.send(err)
            else if (!project)
                res.send(404)
            else
                res.send(project)
            next()            
        })
    }
}