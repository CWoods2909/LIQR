const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { Cocktail } = require('../../db/models')
const { DrinkList } = require('../../db/models');



//add a drink to drinklist
router.post('/', asyncHandler(async (req, res) => {
    const addToDrinkList = await DrinkList.create(req.body)
    return res.json(addToDrinkList)
}))

//delete cocktail
router.delete('/:id', asyncHandler(async (req, res) => {
    const deleteCocktail = await DrinkList.destroy({ where: { cocktailId: req.params.id } })
    return res.json(deleteCocktail)
}));

//get drinkList
router.get('/:id', asyncHandler(async (req, res) => {
    const { id } = req.params
    const list = await DrinkList.findAll({
        where: {
            userId:id
        },
        include: { model: Cocktail }
    })
    return res.json(list)
}))


module.exports = router;