const express = require("express"); // yeu cau su dung thu vien express

var app = express();

app.use(express.static("./public")); 
app.set("view engine","ejs");
app.set("views","./views")

var server = require("http").Server(app)
var io = require("socket.io")(server)
server.listen(3000)
io.on("connection",function(socket){
    console.log("Có người kết nói " + socket.id)
    socket.on("client-send-color",function(data){
        console.log(data);
        socket.broadcast.emit("Server-send-color",data)
    })
})

app.get("/",function(req,res)
{
    res.render("trangchu");
}
)