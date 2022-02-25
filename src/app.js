const express  = require('express');
const app = express();
const cors = require('cors');
const http = require('http');
const { v4: uuid } = require('uuid');
const server  = http.createServer(app);
const {Server} = require('socket.io');
const path = require('path');
const io = new Server(server,{
    cors:{
        origin:'*'
    }
});

app.use(express.static(path.join(__dirname, '../build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

let onlineUsers=[];

io.on("connection",(socket)=>{
    console.log("User connected : ",socket.id);
    socket.on("new_user",(data)=>{
        data={...data,room_id:uuid()};
        socket.join(data.room_id);
        onlineUsers.push({name:data.name,socket_id:socket.id});
        io.to(data.room_id).emit("joined_room_create",{data,onlineUsers});
        console.log(onlineUsers);
    });
    socket.on("join_a_room",(data)=>{
        socket.join(data.room_id);
        onlineUsers.push({name:data.name,socket_id:socket.id});
        io.to(data.room_id).emit("joined_room_join",{data,onlineUsers});
        console.log(onlineUsers);
    });
    socket.on("send_message",(data)=>{
            socket.broadcast.to(data.room_id).emit("receive_message",data);
    });
    socket.on("disconnect",()=>{
        if(onlineUsers.length>0)
        {
            onlineUsers=onlineUsers.filter((user)=>user.socket_id!=socket.id);
            socket.emit("user_disconnected",onlineUsers);
        }
        console.log("user disconnected : "+socket.id);
    });
});
app.use(cors);



module.exports=server;


