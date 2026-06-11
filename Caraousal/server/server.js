const express = require("express")
const cors = require("cors")
const app = express()
const PostgresConn = require("./databasePg")

PostgresConn.connect().then(()=>{
    console.log("Connected");
})
app.use(cors())

async function connection() {
  const result = await PostgresConn.query(
    'SELECT * FROM "sliderUrl"'
  );

  return result.rows;
}

console.log(connection().then((data)=>{
    console.log(data);
    
}));

app.get("/",(req,res)=>{
    return res.send("server is running")
})

app.listen("2000",()=>{
    console.log("http://localhost:2000/")
})
