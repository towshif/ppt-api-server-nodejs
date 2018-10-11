/** */
const DataSlide = require('../models/DataSlide')


//  Image render 
//include http, fs and url module
var http = require('http'),
    fs = require('fs'),
    path = require('path'),
    url = require('url');
    imageDir = '/home/towshif/code/js/data/ppt-img-all/ppt-img/';


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
    getHeads: (req, res, next) => {
        DataSlide
        .find(req.params.id, {filename:1, Content:1}).limit(10)
        
        .then((err, dataSlide)=> {
            if (err)
                res.send(err)
            else if (!dataSlide)
                res.send(404)
            else
                res.send(dataSlide)
            next()            
        })
    },

    getAll: (req, res, next) => {
        DataSlide
        .find() //* add filter */// (req.params.id, {filename:1, Content:1})
        .limit(10)        
        .exec((err, dataSlide)=> {           
            if (err)
                res.send(err)
            else if (!dataSlide)
                res.send(404)
            else
                res.send({
                    im: dataSlide.map(doc => {
                        return {
                          _id: doc._id,
                          _Filename: doc.filename,                          
                          _Imgsrc : '/data-img/ppt-img/'+ doc._id+ '.jpg', 
                          _Content : doc.Content, 
                          _Source : doc.source,
                          _Filetype : doc.fileType, 
                          _Image : doc.image
                        }
                    })       
                })
            next()            
        })
    }
}