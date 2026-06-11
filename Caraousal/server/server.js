const express = require("express")
const cors = require("cors")
const app = express()
const PostgresConn = require("./databasePg")

PostgresConn.connect().then(()=>{
    console.log("Connected");
})
app.use(cors())

app.get("/",(req,res)=>{
    return res.send("server is running")
})



app.listen("2000",()=>{
    console.log("http://localhost:2000/")
})
