var express = require("express"),
    app = express();

/*Have Express Look In The Public Folder For Views*/
app.use(express.static("views"));

app.set("view engine", "ejs");

    
    
app.get("/", function(req, res){
    res.render("index");
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Listening On Port " + process.env.PORT);
});