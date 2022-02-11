const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const cocktailRouter = require('./cocktails.js');
const drinkListRouter = require('./drinkList.js')

router.use('/session', sessionRouter);
router.use('/cocktails', cocktailRouter);
router.use('/users', usersRouter);
router.use('/drinkList', drinkListRouter);






module.exports = router;