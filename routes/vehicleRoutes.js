const express = require('express')
const router = express.Router()
const {getVehicles,setVehicles,updateVehicles,deleteVehicles} = require('../controllers/vehiclecontroller')


router.route('/').get(getVehicles).post(setVehicles)
router.route('/:id').delete(deleteVehicles).put(updateVehicles)



//router.get('/', (req, getGoals))
//router.post('/', (req, setGoals))
//router.put('/:id', (req, updateGoals))
//router.delete('/:id', (req, deleteGoals))
/*
router.get('/', (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

router.post('/', (req, res) => {
    res.status(200).json({message: 'Set goals'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})


router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})
*/



module.exports = router