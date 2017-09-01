var express = require("express"),
    app = require(express);
    
app.get("/", function(req, res){
    
    res.render("circlesClean.html");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Listening On Port" + process.env.PORT);
});