const mongoose = require('mongoose')

/* Use dataslide model from mongodb > resultsDatabase */

let DataSlideSchema = new mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        filename : String,
        filePath : String,
        // fileType : String,
        Content  : String, 
        source  : String, 

        /* property processing with getters */
        fileType : { type: String, 
                    get : function(url) {
                        return ('hello'+ url); 
                        }
                    },
        /* adding properties to schema  */
        
        image    : String

        // // name: String,
        // // email: String,
        // // provider: String,
        // // provider_id: String,
        // // token: String,
        // // provider_pic: String,
        // // followers: [
        // //     {
        // //         type: mongoose.Schema.Types.ObjectId,
        // //         ref: 'User'
        // //     }
        // // ],
        // // following: [
        // //     {
        // //         type: mongoose.Schema.Types.ObjectId,
        // //         ref: 'User'
        // //     }
        // // ]
    }
)

function obfuscate (cc) {
    return '****-****-****';
  }

DataSlideSchema.methods.getset = function (c) {
    
    var returnObject = {
        filename: c.filename,
        address: c.filepath,
        randomField: c.Content 
        // img : "/"+this.slide_id+".jpg"
    };
    return returnObject
}

// // Enable Mongoose getter functions
DataSlideSchema.set('toObject', { getters: true });
DataSlideSchema.set('toJSON', { getters: true });

module.exports = mongoose.model('DataSlide', DataSlideSchema)