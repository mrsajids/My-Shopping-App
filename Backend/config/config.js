const mongoose = require('mongoose')

const dbconnection=async ()=>{
    try {
        mongoose.connect(process.env.MONGOOSE_URI).then(() => console.log('connection successful'))
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports= dbconnection