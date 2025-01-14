const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 3019

const app = express();
app.use(express.static(__dirname))
app.use(express.urlencoded({extended: true}))

mongoose.connect('mongodb://localhost:27017/PureRxcing')
const db = mongoose.connection
db.once('open', ()=>{
    console.log('Successfully connected to MongoDB')
})

const userSchema = new mongoose.Schema({
    regd_no: String,
    email: String,
    About: String,
    First_Name: String,
    Last_Name: String,
    City: String,
    State: String,
    Postal_code: String,
})

const Users = mongoose.model("data",userSchema)

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname,'/contact.html'))
})

app.post('/post',async (req,res) => {
    const {regd_no,
        About,
        First_Name,
        Last_Name,
        email,
        City,
        State,
        Postal_code} = req.body

    const user = new Users({
        regd_no,
        email,
        About,
        First_Name,
        Last_Name,
        City,
        State,
        Postal_code,
    })
    await user.save()
    console.log(user)
    res.send("form submitted")
})

app.listen(port, () => {
    console.log('Server started')
})