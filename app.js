const express = require("express");
const app = express();

app.use(express.static("Public"));

app.get("/", function (req,res){

    res.sendFile(__dirname + "/index.html");
});
app.get("/search", function (req,res){

    res.sendFile(__dirname + "/search.html");
});
app.get("/social", function (req,res){

    res.sendFile(__dirname + "/social.html");
});
app.get("/productivity", function (req,res){

    res.sendFile(__dirname + "/productivity.html");
});
app.get("/list", function (req,res){

    res.sendFile(__dirname + "/list.html");
});

app.listen(4000, function (){
    console.log("Server Running on Server 4000.");
});