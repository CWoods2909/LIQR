const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const cocktailRouter = require('./cocktails.js');

router.use('/session', sessionRouter);
router.use('/cocktails', cocktailRouter);
router.use('/users', usersRouter);

// router.post('/test', (req, res) => {
//     res.json({ requestBody: req.body });
// });





module.exports = router;