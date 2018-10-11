const imgcontroller = require('./../controllers/img.ctrl')

module.exports = (router) => {

    /**
    * get a slide by ID
    */
    router
        .route('/img/:id')
        .get(imgcontroller.getImg)

    
    /* get hello message check route impot @ /routes/index.js */

    router
        .route('/helloimg')
        .get(function (req, res, next) {
            console.log('Someone made a request @ api/hello!');
            res.send('hello');
            next();
        })

}