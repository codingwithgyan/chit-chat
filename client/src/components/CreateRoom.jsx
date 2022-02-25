import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
import {io} from "socket.io-client";
import { SocketContext } from "../context/SocketContext";
export function CreateRoom()
{
  const [username,setUsername]=useState("");
  const [room,setRoom]=useState("");
  const navigate = useNavigate();
  const {socket,onlineUsers,setOnlineUsers} = useContext(SocketContext);
  const createRoom = ()=>{
    socket.on("connect",()=>{
      console.log("connected to server");
    });
    socket.emit("new_user",{
          name:username,
          room,
    });
    socket.on("joined_room",(data)=>{
        setOnlineUsers(data.onlineUsers);
        data=data.data;
        console.log("User joined a room successfully",data);
        navigate(`/chat?id=${data.room_id}&name=${data.name}&room=${data.room}`);
    });
  }
    return <div className="bgImage">
                <Navbar/>
                <div className="login_box">
                  <div className="login_logo"></div>
                  
                  <div><label>Enter Your name</label></div>
                  <div><input onChange={(e)=>{setUsername(e.target.value)}} type="text" className="login_input" placeholder="" /></div>

                    <div><label>Enter Room Name</label></div>
                        <div><input  onChange={(e)=>{setRoom(e.target.value)}} type="text" className="login_input" placeholder="" /></div>
                        <div><button onClick={createRoom} className="login_create">Create</button></div>
                </div>
    </div>
}