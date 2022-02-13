const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { DrinkList } = require('../../db/models')
const { Cocktail } = require('../../db/models')


//all drinks
router.get('/', asyncHandler(async (req, res) => {
    const cocktails = await Cocktail.findAll();
    return res.json(cocktails)

}));

//get new drink form
router.post('/new', asyncHandler(async (req, res) => {
    const newCocktailId = await Cocktail.create(req.body);
    return res.json({ newCocktailId })
}));

//get single drink
router.get('/:id', asyncHandler(async (req, res) => {
    const cocktail = await Cocktail.findByPk(req.params.id)
    return res.json(cocktail)
}));

//delete cocktail
router.delete('/:id', asyncHandler(async (req, res) => {
    const deleteCocktail = await Cocktail.findOne({ where: { id: req.params.id } })
    const favDrink = await DrinkList.findAll({ where: { cocktailId: req.params.id } })
    favDrink.forEach (async(drink) => {
        await drink.destroy();
    });
    await deleteCocktail.destroy()
    return res.json({ message: 'success' })
}));

//edit a cocktail
router.put('/:id', asyncHandler(async (req, res) => {
    const { name, ingredients, liquorType, directions, imgUrl } = req.body
    await Cocktail.update({ name, ingredients, liquorType, directions, imgUrl }, { where: { id: req.params.id } })
    const cocktail = await Cocktail.findByPk(req.params.id)
    return res.json(cocktail)
}))
module.exports = router;