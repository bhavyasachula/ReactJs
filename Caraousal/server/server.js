const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.get("/",(req,res)=>{
    return res.send("server is running")
})
app.post()
app.listen("2000",()=>{
    console.log("http://localhost:2000/")
})
