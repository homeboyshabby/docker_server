var mysql = require("mysql");
var express = require("express");
var app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
var conn = mysql.createConnection({
    host:"172.18.5.8",
    database : "myapp_db",
    user : "root",
    password : "root",
    port:"9099"
});
conn.connect();
app.get("/list",(req,resp)=>{
    
    var sql = "select * from user";
    console.log(sql);
    conn.query(sql,(err,result)=>{
        if(err == null)
        {
            console.log("select done");
            resp.send(JSON.stringify(result));
        }
        else{
            console.log(err);
            resp.send(JSON.stringify(err));
        }
    });
    //conn.end();
})
app.listen(9898,()=>{
    console.log("server started!");
})