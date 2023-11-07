const express = require('express')
require('dotenv').config()
const PORT = process.env.PORT || 8080
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("CONNECTED")
}

const { user } = require("./models/model")
const server = express()

server.get("/get", async (req, res) => {
    let data = await user.find()
    console.log(data)
    res.json(data)
})

server.post("/post", async (req, res) => {
    let User = new user({
        id: 1,
        name: "arya",
        age: 23,
        gender: 'Male',
        role: "FrontEnd"
    });

    let data = await User.save()
    console.log(data)
    res.json(data)
})

server.listen(PORT)