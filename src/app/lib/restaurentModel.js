
const {mongoose} = require('mongoose')

const restaurentModel = new mongoose.Schema({
    name:String
})

export const restaurentSchema = mongoose.models.restaurents
|| mongoose.model('restaurents',restaurentModel)