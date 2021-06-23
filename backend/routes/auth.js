const router = require('express').Router()
const {secure, registerValidation, loginValidation, tokenValidation} = require('../app/middlewares/auth');
const {register, login, refreshToken,getUser} = require('../app/controllers/AuthController')


router.post('/login',loginValidation,login) 

router.post('/register',registerValidation,register) 

router.post('/refresh_token',tokenValidation,refreshToken) 

router.get('/user',getUser)

module.exports = router;