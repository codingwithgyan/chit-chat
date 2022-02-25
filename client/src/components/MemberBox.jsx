import { useContext, useEffect, useState } from "react";
import { SocketContext } from "../context/SocketContext";
import { MemberCard } from "./MemberCard";

export function MemberBox({})
{
    const {socket,onlineUsers,setOnlineUsers}=useContext(SocketContext);
    useEffect(()=>{
        socket.on("joined_room",(data)=>{
            setOnlineUsers(data.onlineUsers);            
        });
    },[socket]);
    return <div className="member_box">
                {
                    
                    onlineUsers!==undefined && onlineUsers.length>0?onlineUsers.map((user)=>{
                            return <MemberCard pic_name={user.name}/>
                    }):""
                }
                
    </div>
}