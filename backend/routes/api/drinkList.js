const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { User } = require('../../db/models');
const { Cocktail } = require('../../db/models')


//add a drink to drinklist
router.post('/', asyncHandler(async(req, res)=>{
    const addToDrinkList = await Cocktail.create(req.body)
    return res.json(addToDrinkList)
}))

//delete cocktail
router.delete('/:id', asyncHandler(async (req, res) => {
    const deleteCocktail = await Cocktail.destroy({ where: { id: req.params.id } })
    return res.json(deleteCocktail)
}));


module.exports = router;