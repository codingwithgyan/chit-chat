import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import {io} from "socket.io-client";
import { SocketContext } from "../context/SocketContext";
export function JoinRoom()
{
  const [username,setUsername]=useState("");
  const [roomId,setRoomId]=useState("");
  const navigate = useNavigate();
  const {socket,onlineUsers,setOnlineUsers} = useContext(SocketContext);
  const joinRoom=()=>{
        socket.on("connect",()=>{
          console.log("connected to server");
        });

        socket.emit("join_a_room",{
          name:username,
          room_id:roomId,
        });
        socket.on("joined_room_join",(data)=>{
          setOnlineUsers(data.onlineUsers);
          data=data.data;
          console.log("User joined a room successfully",data);
          navigate(`/chat?id=${data.room_id}&name=${data.name}&room=${data.room_id}`);
      });
  }
    return <div className="bgImage">
    <Navbar/>
    <div className="login_box">
      <div className="login_logo"></div>
      <div><label>Enter Your name</label></div>
            <div><input onChange={(e)=>{setUsername(e.target.value)}} type="text" className="login_input" placeholder="" /></div>
        <div><label>Enter Room ID</label></div>
            <div><input onChange={(e)=>{setRoomId(e.target.value)}} type="text" className="login_input" placeholder="" /></div>
            <div><button className="login_create" onClick={joinRoom}>Join</button></div>
    </div>
</div>
}