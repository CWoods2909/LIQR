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
    return res.redirect(`/cocktails/${newCocktailId}`)
}))





module.exports = router;