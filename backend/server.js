const express = require('express')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/auth',require('./routes/auth'))

require('./config/db').connectToMongoDB()


app.listen('7860',()=>{
    console.log("Listening at port :" + 7860);
})