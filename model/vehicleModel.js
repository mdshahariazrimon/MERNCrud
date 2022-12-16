const mongoose = require('mongoose')

const vehicleSchema = mongoose.Schema({
    milage:{
        type: String,
        required:[true, 'Please add milage'],
    },
    vehicle_id:{
        type: String,
        required:[true, 'Please add vehicle id'],
    },
    plate_no:{
        type: String,
        required:[true, 'Please add plate_no'],
    },
    condition:{
        type: String,
        required:[true, 'Please add condition'],
    },
    model:{
        type: String,
        required:[true, 'Please add a model'],
    },
    color:{
        type: String,
        required:[true, 'Please add a color'],
    },
    image:{
        type: String,
        required:[true, 'Please add a image'],
    },
    author_code:{
        type: String,
        required:[true, 'Please add a author_code'],
    },
    status:{
        type: String,
        required:[true, 'Please add status'],
    },
},{
    timestamps: true,
})

module.exports = mongoose.model('Vehicle', vehicleSchema)