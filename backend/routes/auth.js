const router = require('express').Router()



router.get('/login',(req,res)=>{
    res.json({login:"successfully"}).status(200)
}) 

router.post('/register',(req,res)=>{
    res.json({register:"successfully"}).status(200)
}) 

module.exports = router;