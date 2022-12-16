const asyncHandler = require('express-async-handler')

const Vehicle = require('../model/vehicleModel')
// @desc Get goals
// @route GET/api/goals
//@access Private

const getVehicles =asyncHandler( async(req, res) => {
    const vehicles = await Vehicle.find()
    res.status(200).json(vehicles)
})

// @desc Set vehicles
// @route POST/api/vehicles
//@access Private

const setVehicles =asyncHandler( async(req, res) => {

    if(!req.body.milage || !req.body.vehicle_id || !req.body.plate_no || !req.body.condition ||
        !req.body.model || !req.body.color || !req.body.image || !req.body.author_code || 
        !req.body.status  ){
        res.status(400)
        //res.status(400).json({message: 'Please add a fext field'})
        throw new Error('Please add a text field')
    }
    
    const vehicle = await Vehicle.create( {
        milage: req.body.milage,
        vehicle_id: req.body.vehicle_id,
        plate_no: req.body.plate_no,
        condition: req.body.condition,
        model: req.body.model,
        color: req.body.color,
        image: req.body.image,
        author_code: req.body.author_code,
        status: req.body.status,
    })
    res.status(200).json(vehicle)
})

// @desc Update goals
// @route PUT/api/goals/:id
//@access Private

const updateVehicles =asyncHandler( async(req, res) => {

    const vehicle= await Vehicle.findById(req.params.id)

    if(!vehicle){
        res.status(400)
        throw new Error('Vehicle not found')
    }

    const updatedVehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })


    res.status(200).json(updatedVehicle)
})

// @desc Delete goals
// @route DELETE/api/goals/:id
//@access Private

const deleteVehicles =asyncHandler(async(req, res) => {
    const vehicle= await Vehicle.findById(req.params.id)
    if(!vehicle){
        res.status(400)
        throw new Error('Vehicle not found')
    }

    await vehicle.remove()


    res.status(200).json({id: req.params.id})
})

module.exports = {
    getVehicles,
    setVehicles,
    updateVehicles,
    deleteVehicles
}