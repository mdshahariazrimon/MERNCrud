const express = require('express')
const router = express.Router()
const {getGoals,setGoals,updateGoals,deleteGoals} = require('../controllers/goalController')


router.route('/').get(getGoals).post(setGoals)
router.route('/:id').delete(deleteGoals).put(updateGoals)



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
