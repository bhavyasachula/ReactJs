const express = require("express")
const cors = require("cors")
const app = express()
const PostgresConn = require("./databasePg")


app.use(cors())

async function connection() {
PostgresConn.connect().then(()=>{
    console.log("database Connected");
})
}

connection()

// connection().then((data)=>{
//     console.log(data); 
// });

app.get("/",(req,res)=>{
    return res.send("server is running")
 })

//   const result = await PostgresConn.query(
//     'SELECT * FROM "sliderUrl"'
//   );

//   return result.rows;

app.get("/upload",(req,res)=>{
    console.log(req.body);
})
app.listen("2000",()=>{
    console.log("http://localhost:2000/")
})
