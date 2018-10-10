const dataslidecontroller = require('../controllers/project.ctrl')

module.exports = (router) => {

    /**
     * get all slides
     */
    router
        .route('/projects')
        .get(dataslidecontroller.getAll)


    /**
    * get a slide by ID
    */
    router
        .route('/project/:id')
        .get(dataslidecontroller.getUser)

    
    /* get hello message check route impot @ /routes/index.js */

    router
        .route('/helloproject')
        .get(function (req, res, next) {
            console.log('Someone made a request @ api/hello!');
            res.send('hello');
            next();
        })

}