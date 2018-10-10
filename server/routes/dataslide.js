const dataslidecontroller = require('./../controllers/dataSlide.ctrl')

module.exports = (router) => {

    /**
     * get all slides
     */
    router
        .route('/dataslides')
        .get(dataslidecontroller.getAll)


    /**
    * get a slide by ID
    */
    router
        .route('/dataselide/:id')
        .get(dataslidecontroller.getUser)

    
    /* get hello message check route impot @ /routes/index.js */

    router
        .route('/hellodataslides')
        .get(function (req, res, next) {
            console.log('Someone made a request @ api/hello!');
            res.send('hello');
            next();
        })

}