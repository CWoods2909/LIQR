const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { Cocktail } = require('../../db/models')


//all drinks
router.get('/', asyncHandler(async (req, res) => {
    const cocktails = await Cocktail.findAll();
    return res.json(cocktails)
    
}))

//get new drink form
router.post('/new', asyncHandler(async(req, res)=>{
    const newCocktailId = await Cocktail.create(req.body);
    return res.json({newCocktailId})
}))

//get single drink
router.get('/:id', asyncHandler(async(req, res)=>{
    const cocktail = await Cocktail.findOne(req.params.id)
    return res.json(cocktail)
}))



module.exports = router;