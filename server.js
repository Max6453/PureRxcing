const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3019

const app = express();
app.use(express.static(__dirname))
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/Pure-Rxcing')
const db = mongoose.connection
db.once('open', ()=>{
    console.log('Successfully connected to MongoDB')
})

const userSchema = new mongoose.Schema({
    about: String,
    first_name: String,
    last_name: String,
    email: String,
    city: String,
    region: String,
    postal_code: String,
})

const Users = mongoose.model("Contact-Form",userSchema)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'/contact.html'))
})

app.post('/post',async (req,res) => {
    const {
        about,
        first_name,
        last_name,
        email,
        city,
        region,
        postal_code} = req.body

    const user = new Users({
        about,
        first_name,
        last_name,
        email,
        city,
        region,
        postal_code,
    })
    await user.save()
    console.log(user)
    res.send("form submitted, Please return to the previous page")
})

app.listen(port, () => {
    console.log('Server started')
})
