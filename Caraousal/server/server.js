const express = require("express")
const cors = require("cors")
const app = express()
const PostgresConn = require("./databasePg")

app.use(express.json())
app.use(cors())

async function connection() {

 PostgresConn.connect().then(()=>{
    console.log("database Connected");
})
}
connection()

app.get("/",(req,res)=>{
    return res.send("server is running")
 })


app.post("/upload",async(req,res)=>{
    const {url} = req.body
    const result = await PostgresConn.query('SELECT MAX(id) as maxid FROM "sliderUrl" ');
    const nextid = Number(result.rows[0].maxid) + 1
    const response = await PostgresConn.query('INSERT into "sliderUrl(id,url) values($1,$2)"',[nextid,url])
    console.log(response)
    res.send("saved")
})

app.get("/transfer",(req,res)=>{
console.log("helloi");

})
app.listen("2000",()=>{
    console.log("http://localhost:2000/")
})
