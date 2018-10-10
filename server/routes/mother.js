const dataslidecontroller = require('./../controllers/mother.ctrl')

module.exports = (router) => {

    /**
     * get all slides
     */
    router
        .route('/mothers')
        .get(dataslidecontroller.getAll)


    /**
    * get a slide by ID
    */
    router
        .route('/mother/:id')
        .get(dataslidecontroller.getUser)

    
    /* get hello message check route impot @ /routes/index.js */

    router
        .route('/hellomother')
        .get(function (req, res, next) {
            console.log('Someone made a request @ api/hello!');
            res.send('hello');
            next();
        })

}