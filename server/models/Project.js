const mongoose = require('mongoose')

/* Use dataslide model from mongodb > resultsDatabase */

let ProjectSchema = new mongoose.Schema(
    {
        filename : String,
        filepath : String,
        filetype : String,
        Content  : String

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
module.exports = mongoose.model('Project', ProjectSchema)