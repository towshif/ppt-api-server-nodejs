const mongoose = require('mongoose')

/* Use dataslide model from mongodb > resultsDatabase */

let ImgSchema = new mongoose.Schema(
    {
        link : String,
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
module.exports = mongoose.model('Img', ImgSchema)